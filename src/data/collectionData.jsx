import postOnePhoto from "../assets/image/postOne.jpg"
import postTwoPhoto from "../assets/image/postTwo.jpg"
import postThreePhoto from "../assets/image/postThree.jpg"
import postFourPhoto from "../assets/image/postFour.jpg"
import postFivePhoto from "../assets/image/postFive.jpg"
import postSixPhoto from "../assets/image/postSix.jpg"
export function InstagramIcon(props) {
  return (
    <svg 
      {...props}
      role="img"
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>Instagram</title>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ... ostatak..." />
    </svg>
  );
}

export const collectionData = [
    {name: "Eleganta kolekcija", desc: "Sofisticirani komadi za posebne prilike", img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"},
    {name: "Casual Sik", desc: "Udobnost i stil za svaki dan", img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"},
    {name: "Dodaci", desc: "Savrseni detalji za kompletan izgled", img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"},
    {name: "Premium Linija", desc: "Ekslukzivni dizajnerski komadi", img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"}

]

export const instagramPosts = [
  {
    id: 1,
    image: postOnePhoto,
    likes: 342,
    comments: 28,
        url:"https://www.instagram.com/monamour_mne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"

  },
  {
    id: 2,
    image: postTwoPhoto,
    likes: 489,
    comments: 35,
        url:"https://www.instagram.com/monamour_mne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"

  },
  {
    id: 3,
image: postThreePhoto,    likes: 567,
    comments: 42,
        url:"https://www.instagram.com/monamour_mne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"

  },
  {
    id: 4,
image: postFourPhoto,    likes: 423,
    comments: 31,
        url:"https://www.instagram.com/monamour_mne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"

  },
  {
    id: 5,
image: postFivePhoto,    likes: 398,
    comments: 24,
        url:"https://www.instagram.com/monamour_mne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"

  },
  {
    id: 6,
image: postSixPhoto,    likes: 521,
    comments: 38,
    url:"https://www.instagram.com/monamour_mne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
  },
  
];

export const reasonsToChooseUs = [
    {name: "Jedinstven izbor", description: "Naše komade možete pronaći i isprobati isključivo u Mon amour butiku u Podgorici."
, icon: "hotel_class"},
    {name: "Samo jedan komad", description: `Prilikom odabira nekog od nasih komada, nemate brigu da će još neko nositi istu haljinu kao i Vi. Haljine se ne ponavljaju, 
       već od svakog modela imamo samo jednu.`, icon:"favorite"},
    {name: "Mogućnost dostave", description: "U saradnji sa kurirskom službom, sve naše haljine možete poručiti putem instagrama, i dobiti je u roku od 48h.", icon: "verified_user"},
    {name: "Naša usluga ", description: "Bilo da nas posjetite ili nam pišete online, tu smo da pomognemo da se odlučite za savršen model za Vas. Ako želite snimke uživo, ili naše mišljenje - spremni smo da pomognemo.", icon:"local_shipping"}
]


