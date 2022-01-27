/*
Copyright 2021 ChainSafe Systems
SPDX-License-Identifier: LGPL-3.0-only
*/
import { gql } from "apollo-boost"

export const LOAD_NODE_COUNTS = gql`
  query GetNodeStats {
    getNodeStats {
      totalNodes
      discoveredPeers
      nodeSyncedPercentage
      nodeUnsyncedPercentage
    }
  }
`

export const LOAD_NODE_COUNT_OVER_TIME = gql`
  query GetNodeStatsOverTime($start: Float!, $end: Float!) {
    getNodeStatsOverTime(start: $start, end: $end) {
      time
      totalNodes
      syncedNodes
      unsyncedNodes
    }
  }
`

export const LOAD_REGIONAL_STATS = gql`
  query GetRegionalStats {
    getRegionalStats {
      totalParticipatingCountries
      hostedNodePercentage
      nonhostedNodePercentage
    }
  }
`

export const LOAD_CLIENTS = gql`
  query GetClientCounts {
    aggregateByAgentName {
      name
      count
    }
  }
`

export const LOAD_OPERATING_SYSTEMS = gql`
  query GetOperatingSystems {
    aggregateByOperatingSystem {
      name
      count
    }
  }
`

export const LOAD_NETWORKS = gql`
  query GetNetworks {
    aggregateByNetwork {
      name
      count
    }
  }
`

export const LOAD_HEATMAP = gql`
  query GetHeatmap {
    getHeatmapData {
      networkType
      clientType
      syncStatus
      latitude
      longitude
    }
  }
`

export const LOAD_CLIENT_VERSIONS = gql`
  query GetClientVersions {
    aggregateByClientVersion {
      client
      count
      versions {
        name
        count
      }
    }
  }
`

export const LOAD_NODES_BY_COUNTRIES = gql`
  query GetNodesByCountries {
    aggregateByCountry {
      name
      count
    }
  }
`

export const LOAD_ALTAIR_UPGRADE_PERCENTAGE = gql`
  query GetAltAirUpgradePercentage {
    getAltairUpgradePercentage
  }
`
