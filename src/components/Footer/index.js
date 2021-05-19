import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="content">&copy; {new Date().getFullYear()} Writely</div>
    </footer>
  );
}

export default Footer;
