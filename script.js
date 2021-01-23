const sounds=['applause','horror','ambulance'];
const buttons=document.getElementById('buttons');
let count=1;
sounds.forEach(sound=>{
    const btn=document.createElement('button');

    btn.classList.add('btn');
    btn.innerText=sound;
    buttons.appendChild(btn);

    btn.addEventListener('click', ()=>{
        const song=document.getElementById(sound);
        
        count++;
        stopsong();
        song.play();
        console.log(count)
    })

})

function stopsong(){
    sounds.forEach(sound=>{
        const song=document.getElementById(sound);
        song.pause();
        song.currentTime=0;
    
    })
}
// hwl w w
// dsdas