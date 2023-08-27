// Add JavaScript code here

const newGame = [
    {
        image: "https://staticg.sportskeeda.com/editor/2020/12/ed6f5-16069157093599-800.jpg",
        caption: "Need for speed No Limits",
        rating: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png"
    },
    {
        image: "https://gamersunite.s3.amazonaws.com/uploads/june-s-journey-hidden-object-mystery-game/1508613817324",
        caption: "June's Journey",
        rating: "https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-three-3-star-rank-background-png-image_4833765.png"
    },
    {
        image: "https://store-images.s-microsoft.com/image/apps.31945.13622106627511667.cfae7aa9-70ca-4a3f-b792-b8ed981d7eef.c2ec1aa8-347b-4b62-8d00-9cad25a6f9c5?mode=scale&q=90&h=1080&w=1920",
        caption: "Batman:The Enemy Within",
        rating: "https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-three-3-star-rank-background-png-image_4833765.png"
    }
] 

let html = "";
newGame.forEach((pre) => {
    html += `<div class="game">
            
            <img src="${pre.image}" id="pic">
            <div class="low">
                <p>${pre.caption}</p>
                <img src="${pre.rating}" id="rate">
            </div>
            </div>`
}) 

document.querySelector('.new-game').innerHTML = html




const recGame = [
    {
        image: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1540572337395-TB8ACA2FK77Y4JRF37TK/io.jpg?format=2500w",
        caption: "Inside Out",
        rating: "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png",
        free : "Free"
    },
    {
        image:"https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0",
        caption:"Candy Crush",
        rating:"https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-three-3-star-rank-background-png-image_4833765.png",
        free: "Free"
    },
    {
        image:"https://img.utdstc.com/icon/dd6/264/dd6264f7eb7913d895fb7bb4f3a0d7336363ecb494712aec3cc7cd1492ec2118:200",
        caption:"Angry Birds Evolution",
        rating:"https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-three-3-star-rank-background-png-image_4833765.png",
        free: "Free"
    },
    {
        image:"https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E",
        caption:"Super Mario Run",
        rating:"https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-three-3-star-rank-background-png-image_4833765.png",
        free: "Free"
    },
    {
        image:"https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/c4dc286c30b8fbde45a0b5d4fe6f2146.png",
        caption:"Fruit Ninja",
        rating:"https://img.freepik.com/premium-vector/five-stars-quality-icon-isolated-transparent-background-stars-rating-review_97458-424.jpg?w=2000",
        free: "Free"
    },
    {
        image:"https://play-lh.googleusercontent.com/kpwWxWjYSfFwtFKgpF-p0XKFLOX5i1KhBCJb1T-aSamwikd__tqF2JhQQlXOZBnhDSI=w526-h296-rw",
        caption:"Sonic Dash",
        rating:"https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-three-3-star-rank-background-png-image_4833765.png",
        free: "Free"
    },
]


let hml = "";

recGame.forEach((pre) => {
    hml += `<div class="rec">
    <img src="${pre.image}" id="rg">
    <div class="md">
        <img src="${pre.rating}" id="rate">
         <p>${pre.free}</p>
    </div>
    </div>`
})

document.querySelector('.rec-game').innerHTML = hml;