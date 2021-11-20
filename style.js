
function start() {
    document.getElementById("plain").innerHTML = `<h2> Read it Carefully and Double click Here</h2>  YOu are Very Beautiful.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate incidunt soluta minus iste culpa,
            deserunt, beatae ex recusandae, aut eius. Ea, eligendi distinctio adipisci accusantium velit iure quod
            voluptatem?`;
    alert(' Double click :---Anywhere on Paragraph ');
}

function toggle(id) {

    let button = document.getElementById(id);
    if (button.style.display == 'block') {
        button.style.display = 'none'
    }
    else {
        button.style.display = 'block';
    }
    document.getElementById('demo').innerHTML = `Bye Bye`;

}

// function clear() {
//     document.getElementById('demo').innerHTML = `Bye Bye`;
// }


