---
sidebar_position: 8
---

# Data Availability Layer

<!--@include: ./../../components/_deployment-instructions-redirect.md-->

<DeploymentsRedirect />

The dev-cluster uses [Celestia](https://github.com/celestiaorg) as the data
availability layer and is the ultimate destination of all data that has been
ordered by the sequencer network. Once written to Celestia, the transaction
order is considered final and it is where all data will be pulled from when a
new rollup node is spun up.

See the [Celestia website](https://celestia.org/what-is-celestia/) for a more
in depth introduction.
