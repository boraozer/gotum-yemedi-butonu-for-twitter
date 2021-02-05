function handleGotumYemedi()
{
    document.querySelector('#iframe-window-foxql').style.display = 'flex';
}

function handleHideIframe()
{
  document.querySelector('#iframe-window-foxql').style.display = 'none';
}

let buttonAdded = false;

const iframeElement = `<div id = "iframe-window-foxql" style = "position:fixed; background : #bfb9b954; width:100%; height:100%; top:0px; left:0px; 
    z-index:230923;
    display: flex;
    align-items: center;
    justify-content: center;
    display:none;
    ">
  <iframe src = "https://foxql.com/extension-entry" width = "480" height="260" style = "border: 0px;border-radius: 15px;"></iframe>
</div>`;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  
    const uri = document.location.host;
    if(uri === 'twitter.com' && !buttonAdded){
      setTimeout(()=>{
        document.querySelector('body').insertAdjacentHTML('afterend', iframeElement);
        document.querySelector('#iframe-window-foxql').addEventListener('click', handleHideIframe)
        document.querySelector('[data-testid="SideNav_NewTweet_Button"]').
        parentElement.
        insertAdjacentHTML('afterend',`
          <button
          id = "gotum_yemedi_buton"
            data-focusable="true" 
              class="css-4rbku5 css-18t94o4 css-1dbjc4n r-42olwf r-sdzlij r-1phboty 
              r-rs99b7 r-1waj6vr r-1loqt21 r-1w2pmg r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr 
              r-o7ynqc r-6416eg r-lrvibr" style = "width:90%; background-color:rgb(15 20 25) !important;">
            <div dir="auto"
             class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci 
             r-ad9z0x r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 
             r-bcqeeo r-qvutc0"><div style=""><div class="css-1dbjc4n r-xoduu5"><span class="css-901oao css-16my406 
             r-poiln3 r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
                Götüm Yemedi
             </span>
            </span></div></div></span></div></button>`);
  
            const element = document.querySelector('#gotum_yemedi_buton');
            element.addEventListener('click', handleGotumYemedi)
      }, 800);
      buttonAdded = true;
    }

})
