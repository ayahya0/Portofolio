<script>
  import gmail from './assets/gmail.png'
    import tiktok from './assets/tiktok.png'
      import shopee from './assets/shopee.png'
      import tokopedia from './assets/tokopedia.png'
      import excel from './assets/excel.png'
      import word from './assets/word.png'
      import fotoprofil from './assets/foto-profil.png'
      import instagram from './assets/instagram.png'
          import photoshop from './assets/photoshop.png'
      
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>
<head>
    <meta name="viewport" content="width=device-width, user-scalable=yes" >

</head>
<main>
  <div class="layout">
    <h1>Moch. Aji Yahya</h1>

    <p style="width: 85%;">Nama saya Moch. Aji Yahya. Saya adalah seorang  pemuda yang memiliki pemahaman mendalam tentang kebutuhan pelanggan di era digital
   dan berkomitmen untuk selalu memberikan kinerja terbaik. Dengan pengalaman praktis saya di sektor e-commerce, saya memahami dinamika pasar modern.</p>
  
 
    <div class="bundar"><img src="{fotoprofil}" alt="" class="fotoprofil"></div>
  

    
    <div class="scroll-container">
     <p class="kemampuan" style="font-size: 175%; ">Kemampuan </p>
      <div class="sosmed1">
  
  <img src="{tokopedia}" alt="" class="tokopedia">
  <img src="{shopee}" alt="" class="shopee">
  <img src="{word}" alt="" class="word">
  <img src="{photoshop}" alt="" class="photoshop">
  <img src="{excel}" alt="" class="excel">
  <img src="{tiktok}" alt="" class="tiktok">
  </div>
   <div class="sosmed2">
  
  
  <img src="{tokopedia}" alt="" class="tokopedia">
  <img src="{shopee}" alt="" class="shopee">
  <img src="{word}" alt="" class="word">
  <img src="{photoshop}" alt="" class="photoshop">
  <img src="{excel}" alt="" class="excel">
  <img src="{tiktok}" alt="" class="tiktok">
  </div></div>
  <div class="kontak"><div style="font-size: 150%;padding:10%">Hubungi Saya </div>
  <a href="https://www.instagram.com/fianna07d/"><img src="{instagram}" alt="" class="instagram"></a>
  <a href="mailto:ajiyahya1436@gmail.com"><img src="{gmail}" alt="" class="gmail" ></a>
</div></div>
</main>

<style>


  .layout{
    width: 200%;
    font-size: 200%;
    
  }
  
 @media (min-width:600px){
.sosmed1,.sosmed2{
  margin: 3%;
}
  .kontak{padding: 20%;}
 .layout{
  justify-items: center;
  width: 100%;font-size: 100%;
p{width: 50%;}

}
.kemampuan{
position: absolute;
left: 25%;
}
.gmail{position: absolute; bottom: -35%;}
.instagram{position: absolute;left: 43%; bottom: -35%;}
}
 .scroll-container{ 
  
  background-color: rgb(0, 0, 0);
    


 }
 .fotoprofil{
  width: 20%;
  background-color: white;
  border-radius: 50%;
  border: 20%;
  border-style: solid;

  border-color: rgb(167, 255, 186);

 }
 .sosmed1,.sosmed2{
  opacity: 75%;
  padding-top: 0%;
  object-fit: cover;
  animation: none;
  grid-area:scroll-area;
overflow-x: hidden;
position: absolute;
white-space: nowrap;
 }
 .sosmed1{

  padding: 10%;
  animation: scroll-horizontal 10s linear infinite;
animation-delay: 10;
 }
  .sosmed2{
  animation: scroll-horizontal-kiri 10s linear infinite;
  animation-delay: 5ms;
 }
 
 @keyframes scroll-horizontal{
0%{
  right: 200%;
}

100%{
  right:-475%;
}}

@keyframes scroll-horizontal-kiri{
0%{
  left: 200%;
}

100%{
  left:-275%;
}


 }
 html{

 }
 .instagram{
  margin: -4%;
  padding 100px;
 }
 .gmail{
    width: 75px;
    
  }
  .tokopedia{
bottom: 10px;
    width: 150px;
  }
  .excel{ width: 100px;}
  .shopee,.photoshop{ width: 100px;}
  .tiktok{ width: 200px;}

  .word{ width: 100px;}
.kontak{}
</style>
