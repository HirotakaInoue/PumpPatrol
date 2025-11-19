export default function Home() {
  return (
    <main className="hero">
      <p className="hero__eyebrow">Pump Patrol</p>
      <h1 className="hero__title">Monitor fuel pricing trends in real time.</h1>
      <p className="hero__summary">
        This starter uses Next.js, TypeScript, ESLint, and Prettier so you can focus on shipping
        product features instead of wiring tooling.
      </p>
      <div className="hero__actions">
        <a className="hero__button hero__button--primary" href="https://nextjs.org" target="_blank" rel="noreferrer">
          Next.js Docs
        </a>
        <a
          className="hero__button hero__button--ghost"
          href="https://github.com/golangci/golangci-lint"
          target="_blank"
          rel="noreferrer"
        >
          Backend Tooling
        </a>
      </div>
    </main>
  );
}
