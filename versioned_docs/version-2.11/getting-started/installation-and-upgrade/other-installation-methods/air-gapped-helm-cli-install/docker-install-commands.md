---
title: Docker Install Commands
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands"/>
</head>

The Docker installation is for Rancher users who want to test out Rancher.

Instead of running on a Kubernetes cluster, you install the Rancher server component on a single node using a `docker run` command. Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server.

The backup application can be used to migrate the Rancher server from a Docker install to a Kubernetes install using [these steps.](../../../../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md)

For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster.

| Environment Variable Key         | Environment Variable Value       | Description     |
| -------------------------------- | -------------------------------- | ---- |
| `CATTLE_SYSTEM_DEFAULT_REGISTRY` | `<REGISTRY.YOURDOMAIN.COM:PORT>` | Configure Rancher server to always pull from your private registry when provisioning clusters.  |
| `CATTLE_SYSTEM_CATALOG`          | `bundled`                        | Configure Rancher server to use the packaged copy of Helm system charts. The [system charts](https://github.com/rancher/system-charts) repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. These [Helm charts](https://github.com/rancher/system-charts) are located in GitHub, but since you are in an air gapped environment, using the charts that are bundled within Rancher is much easier than setting up a Git mirror. |

:::note Do you want to..

- Configure custom CA root certificate to access your services? See [Custom CA root certificate](../../resources/custom-ca-root-certificates.md).
- Record all transactions with the Rancher API? See [API Auditing](../../../../reference-guides/single-node-rancher-in-docker/advanced-options.md#api-audit-log).

:::

Choose from the following options:

## Option A: Default Self-Signed Certificate

<details id="option-a">
  <summary>Click to expand</summary>

If you are installing Rancher in a development or testing environment where identity verification isn't a concern, install Rancher using the self-signed certificate that it generates. This installation option omits the hassle of generating a certificate yourself.

Log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder.

| Placeholder                      | Description                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.                                                                                           |
| `<RANCHER_VERSION_TAG>`          | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to install. |

Privileged access is [required.](./install-rancher-ha.md#privileged-access-for-rancher)

```
docker run -d --restart=unless-stopped \
    -p 80:80 -p 443:443 \
    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    -e CATTLE_SYSTEM_CATALOG=bundled \ # Use the packaged Rancher system charts
    --privileged \
    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```

</details>

## Option B: Bring Your Own Certificate: Self-Signed

<details id="option-b">
  <summary>Click to expand</summary>

In development or testing environments where your team will access your Rancher server, create a self-signed certificate for use with your install so that your team can verify they're connecting to your instance of Rancher.

:::note Prerequisites:

From a computer with an internet connection, create a self-signed certificate using [OpenSSL](https://www.openssl.org/) or another method of your choice.

- The certificate files must be in PEM format.
- In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates. For an example, see [Certificate Troubleshooting.](../rancher-on-a-single-node-with-docker/certificate-troubleshooting.md)

:::

After creating your certificate, log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder. Use the `-v` flag and provide the path to your certificates to mount them in your container.

| Placeholder                      | Description                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `<CERT_DIRECTORY>`               | The path to the directory containing your certificate files.                                                                  |
| `<FULL_CHAIN.pem>`               | The path to your full certificate chain.                                                                                      |
| `<PRIVATE_KEY.pem>`              | The path to the private key for your certificate.                                                                             |
| `<CA_CERTS.pem>`                     | The path to the certificate authority's certificate.                                                                          |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.                                                                                           |
| `<RANCHER_VERSION_TAG>`          | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to install. |

Privileged access is [required.](./install-rancher-ha.md#privileged-access-for-rancher)

```
docker run -d --restart=unless-stopped \
    -p 80:80 -p 443:443 \
    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
    -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/rancher/ssl/cacerts.pem \
    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    -e CATTLE_SYSTEM_CATALOG=bundled \ # Use the packaged Rancher system charts
    --privileged \
    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```

</details>

## Option C: Bring Your Own Certificate: Signed by Recognized CA

<details id="option-c">
  <summary>Click to expand</summary>

In development or testing environments where you're exposing an app publicly, use a certificate signed by a recognized CA so that your user base doesn't encounter security warnings.

:::note Prerequisite:

The certificate files must be in PEM format.

:::

After obtaining your certificate, log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder. Because your certificate is signed by a recognized CA, mounting an additional CA certificate file is unnecessary.

| Placeholder                      | Description                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `<CERT_DIRECTORY>`               | The path to the directory containing your certificate files.                                                                  |
| `<FULL_CHAIN.pem>`               | The path to your full certificate chain.                                                                                      |
| `<PRIVATE_KEY.pem>`              | The path to the private key for your certificate.                                                                             |
| `<REGISTRY.YOURDOMAIN.COM:PORT>` | Your private registry URL and port.                                                                                           |
| `<RANCHER_VERSION_TAG>`          | The release tag of the [Rancher version](../../installation-references/helm-chart-options.md) that you want to install. |

:::note

Use the `--no-cacerts` as argument to the container to disable the default CA certificate generated by Rancher.

:::

Privileged access is [required.](./install-rancher-ha.md#privileged-access-for-rancher)

```
docker run -d --restart=unless-stopped \
    -p 80:80 -p 443:443 \
    --no-cacerts \
    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \
    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \
    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
    -e CATTLE_SYSTEM_CATALOG=bundled \ # Use the packaged Rancher system charts
    --privileged
    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>
```

</details>
