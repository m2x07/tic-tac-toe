// import "./Footer.sass";

export default function Footer() {
  return (
    <footer className="absolute bottom-2 left-0 right-0 block text-center">
      by{" "}
      <a
        className="text-dodgerBlue-400 underline underline-offset-4"
        href="https://twitter.com/_m2x07"
        target="_blank"
        rel="noopener noreferrer"
      >
        m2x07
      </a>
      {" | "}
      view on{" "}
      <a
        className="text-dodgerBlue-400 underline underline-offset-4"
        href="http://github.com/m2x07/tic-tac-toe"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </footer>
  );
}
