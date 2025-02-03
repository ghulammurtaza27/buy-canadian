"use client"

import { useEffect, useRef } from "react"
import Quagga from "quagga"

interface BarcodeScannerProps {
  onScan: (data: string | null) => void
}

export default function BarcodeScanner({ onScan }: BarcodeScannerProps) {
  const scannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scannerRef.current) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: scannerRef.current,
          },
          decoder: {
            readers: ["ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader"],
          },
        },
        (err) => {
          if (err) {
            console.error(err)
            return
          }
          Quagga.start()
        },
      )

      Quagga.onDetected((result) => {
        onScan(result.codeResult.code)
      })

      return () => {
        Quagga.stop()
      }
    }
  }, [onScan])

  return <div ref={scannerRef} className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden" />
}

