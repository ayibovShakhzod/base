"use client"
// @ts-ignore-file

import React, { lazy, useEffect, useState } from "react"
import * as ReactDOM from "react-dom"

// @ts-ignore

// // @ts-ignore
// const ymaps3React = lazy(() => ymaps3.import("@yandex/ymaps3-reactify"))
// console.log("🚀 ~ ymaps3React:", ymaps3React)

// export const reactify = await ymaps3React.reactify.bindTo(React, ReactDOM)
// export const {
//   YMap,
//   YMapDefaultSchemeLayer,
//   YMapDefaultFeaturesLayer,
//   YMapMarker,
//   YMapListener,
// } = ymaps3.reactify.module(ymaps3)

// export const { YMapDefaultMarker } = reactify.module(
//   await ymaps3.import("@yandex/ymaps3-markers@0.0.1"),
// )

// export const { YMapClusterer } = reactify.module(
//   await ymaps3.import("@yandex/ymaps3-clusterer@0.0.1"),
// )

export const YandexMap = () => {
  // @ts-ignore
  const ymaps3: YMap = window.ymaps3

  const [ymaps3Reactify, setYmaps3Reactify] = useState<any>(null)

  const getYmaps3Reactify = async () => await ymaps3?.import("@yandex/ymaps3-reactify")

  useEffect(() => {
    getYmaps3Reactify().then((ymaps3Reactify) => {
      setYmaps3Reactify(ymaps3Reactify)
    })
  }, [ymaps3])

  if (!ymaps3Reactify) return null

  const reactify = ymaps3Reactify?.reactify?.bindTo(React, ReactDOM)
  console.log("🚀 ~ YandexMap ~ reactify:", reactify)
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = reactify?.module(ymaps3)

  return (
    <div>
      dasdas
      <YMap />
    </div>
  )
}
