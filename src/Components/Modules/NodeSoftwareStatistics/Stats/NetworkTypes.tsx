/*
Copyright 2021 ChainSafe Systems
SPDX-License-Identifier: LGPL-3.0-only
*/
import React from "react"
import { createStyles, makeStyles, useTheme } from "@chainsafe/common-theme"
import { Typography } from "@chainsafe/common-components"
import { Bar } from "react-chartjs-2"
import { useEth2CrawlerApi } from "../../../../Contexts/Eth2CrawlerContext"
import { ECTheme } from "../../../Themes/types"

const useStyles = makeStyles(({ palette, constants }: ECTheme) => {
  return createStyles({
    root: {
      border: `1px solid ${palette.additional["gray"][4]}`,
      borderRadius: "3px",
      padding: constants.generalUnit * 2,
    },
    title: {
      marginBottom: constants.generalUnit * 2,
    },
  })
})

const NetworkTypes = () => {
  const classes = useStyles()
  let { networks } = useEth2CrawlerApi()

  networks = networks.sort((first, second) => (first.count < second.count ? 1 : -1))

  const theme: ECTheme = useTheme()

  const barLabels = networks.map((network) => network.name)
  const barData = networks.map((network) => network.count)
  const barColors = networks.map(() => theme.palette.primary.main)
  const barHoverColors = networks.map(() => theme.palette.primary.hover)

  const data = {
    labels: barLabels,
    datasets: [
      {
        data: barData,
        backgroundColor: barColors,
        hoverBackgroundColor: barHoverColors,
        borderWidth: 1,
        maxBarThickness: 25,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className={classes.root}>
      <Typography component="p" variant="body1" className={classes.title}>
        Network types used for node operations
      </Typography>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default NetworkTypes
