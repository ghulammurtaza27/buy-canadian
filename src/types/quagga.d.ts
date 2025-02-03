declare module 'quagga' {
  interface QuaggaConfig {
    inputStream: {
      name?: string
      type?: string
      target?: HTMLElement
    }
    decoder: {
      readers: string[]
    }
  }

  interface CodeResult {
    code: string
  }

  interface QuaggaResult {
    codeResult: CodeResult
  }

  export function init(config: QuaggaConfig, callback?: (err?: any) => void): void
  export function start(): void
  export function stop(): void
  export function onDetected(callback: (result: QuaggaResult) => void): void
} 