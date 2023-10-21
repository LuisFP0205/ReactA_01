//deixei dentro de uma div , pois se eu quiser add algo acima do footer eu teria essa opção, exemplo foi o Aula top.
function Footer (props){
    return(
    <div>
<strong>AULA TOP </strong>
<footer>
desenvolvido por <strong>{props.author}</strong>
</footer>
    </div>);
}

export default Footer;



