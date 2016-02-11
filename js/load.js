function PlaySound(path)
{
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', path);
    audioElement.play();
}