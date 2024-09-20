const toggleMode = () => {
	const html = document.documentElement;
	html.classList.toggle("light");

	const img = document.querySelector("#profile img");

	// set tiver sem light mode, manter a imagem normal
	if (!html.classList.contains("light"))
		return img.setAttribute("src", "./assets/elvis-farias-colorido.jpg");

	// se tiver light mode, adicionar a imagem light
	img.setAttribute("src", "./assets/elvis-farias-black.jpg");
}