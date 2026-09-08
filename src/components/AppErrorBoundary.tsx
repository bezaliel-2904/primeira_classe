import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : 'Erro inesperado ao carregar o site.',
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Primeira Classe Kids — erro de renderização:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-creme-50 flex items-center justify-center px-6 text-center">
          <div className="max-w-lg">
            <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-sky-600 mb-4">
              Primeira Classe Kids
            </p>
            <h1 className="font-serif text-4xl text-ink-900 mb-4">
              Estamos carregando a nossa vitrine.
            </h1>
            <p className="font-sans text-sm leading-relaxed text-ink-500 mb-7">
              Ocorreu um erro inesperado no carregamento desta página. Atualize a página para tentar novamente.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="font-sans text-sm text-white bg-sky-700 hover:bg-sky-800 px-7 py-3 rounded-full transition-colors"
            >
              Atualizar página
            </button>
            {import.meta.env.DEV && (
              <p className="font-mono text-xs text-ink-400 mt-6 break-words">{this.state.message}</p>
            )}
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
