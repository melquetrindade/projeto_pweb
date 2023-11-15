import React, {useState} from "react";
import styles from '../styles/multiSearch.module.css'
import { useRouter } from "next/router";
import dataMulti from '../repository/searchMulti01.json'

export default function MultiSearch(){

    const router = useRouter()
    const {pesquisa} = router.query
    console.log(pesquisa)

    return(
        <main className={styles.body}>
            <ShowArtists data={dataMulti}/>
            <ShowAlbuns data={dataMulti} router={router}/>
            <ShowPodcast data={dataMulti}/>
        </main>
    )
}

//<ShowAlbuns data={dataMulti}/>

function ShowPodcast({data}){

    const podcastTotal = data.episodes.items.length
    const [podcastAtual, setPodcast] = useState(0)

    const nextPodcast = () => {
        if(podcastAtual < (podcastTotal - 1)){
          setPodcast(podcastAtual + 1)
        }
    }

    const previPodcast = () => {
        if(podcastAtual > 0){
          setPodcast(podcastAtual - 1)
        }
    }

    return(
        <div className={styles.mainPodcast}>
            <h1 className={styles.titlePodcast}>Podcast Relacionados a sua Pesquisa</h1>
            <div className={styles.containerPodcast}>
                <div className={podcastAtual == 0 ? styles.arrowLeftDesablePodcast : styles.arrowLeftPodcast} onClick={previPodcast}>
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                </div>

                <div className={styles.itemPodcast}>
                    <div className={styles.containerImgPodcast}><img src={data.episodes.items[podcastAtual].data.coverArt.sources[2] == null ? '/artistsNull.png' : data.episodes.items[podcastAtual].data.coverArt.sources[2].url}></img></div>
                    <h1 className={styles.nameArtists}>{data.episodes.items[podcastAtual].data.name}</h1>
                    <FormataDados tempo={data.episodes.items[podcastAtual].data.duration.totalMilliseconds} data={data.episodes.items[podcastAtual].data.releaseDate.isoString}/>
                    <div className={styles.contDescricao}>
                        <p>{data.episodes.items[podcastAtual].data.description}</p>
                    </div>                      
                </div>

                <div className={podcastAtual == 9 ? styles.arrowRightDesablePodcast : styles.arrowRightPodcast} onClick={nextPodcast}>
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    )
}

function FormataDados({tempo, data}){

    // Convertendo milissegundos para segundos
    var segundos = Math.floor(tempo / 1000);

    // Calculando os minutos e segundos
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;

    var dataFormat = data.split('T');

    return(
        <div className={styles.contDetails}>
            <p>Duração: {minutos} min e {segundosRestantes} s</p>
            <p className={styles.data}>Lançamento: {dataFormat[0]}</p>
        </div>
    )
}

function ShowArtists({data}){

    const [artistsAtuais, setArtists] = useState([0,1])
    const artistsTotal = data.artists.items.length
    
    const nextArtists = () => {
        if(((artistsAtuais[0]+2) < artistsTotal) && ((artistsAtuais[1]+2) < artistsTotal)){
            setArtists([(artistsAtuais[0] + 2), (artistsAtuais[1] + 2)])
        }
    }

    const previArtists = () => {
        if(((artistsAtuais[0]-2) >= 0) && ((artistsAtuais[1]-2) >= 0)){
            setArtists([(artistsAtuais[0] - 2), (artistsAtuais[1] - 2)])
        }
    }

    return(
        <div className={styles.mainArtista}>
            <h1 className={styles.titleArtista}>Artistas Relacionados a sua Pesquisa</h1>
            <div className={styles.containerArtists}>
                <div className={artistsAtuais[0] == 0 ? styles.arrowLeftDesableArtista : styles.arrowLeftArtista} onClick={previArtists}>
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                </div>
                <div className={styles.itemArtists}>
                    <div className={styles.containerImgArtista}><img src={data.artists.items[artistsAtuais[0]].data.visuals.avatarImage == null ? '/artistsNull.png' : data.artists.items[artistsAtuais[0]].data.visuals.avatarImage.sources[0].url}></img></div>
                    <h1 className={styles.nameArtists}>{data.artists.items[artistsAtuais[0]].data.profile.name}</h1>                        
                </div>

                <div className={styles.itemArtists}>
                    <div className={styles.containerImgArtista}><img src={data.artists.items[artistsAtuais[1]].data.visuals.avatarImage == null ? '/artistsNull.png' : data.artists.items[artistsAtuais[1]].data.visuals.avatarImage.sources[0].url}></img></div>
                    <h1 className={styles.nameArtists}>{data.artists.items[artistsAtuais[1]].data.profile.name}</h1>                        
                </div>
                <div className={artistsAtuais[1] == 9 ? styles.arrowRightDesableArtista : styles.arrowRightArtista} onClick={nextArtists}>
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    )
}

function ShowAlbuns({data, router}){

    const [artistsAtuais, setArtists] = useState([0,1])
    const artistsTotal = data.albums.items.length
    
    const nextArtists = () => {
        if(((artistsAtuais[0]+2) < artistsTotal) && ((artistsAtuais[1]+2) < artistsTotal)){
            setArtists([(artistsAtuais[0] + 2), (artistsAtuais[1] + 2)])
        }
    }

    const previArtists = () => {
        if(((artistsAtuais[0]-2) >= 0) && ((artistsAtuais[1]-2) >= 0)){
            setArtists([(artistsAtuais[0] - 2), (artistsAtuais[1] - 2)])
        }
    }
    
    const navDetailsAlbuns = () => {
        router.push({
            pathname: './detailsAlbuns',
            query: {id: 'opa'}
        })
    }

    return(
        <div className={styles.mainAlbum}>
            <h1 className={styles.titleAlbum}>Álbuns Relacionados a sua Pesquisa</h1>
            <div className={styles.containerAlbum}>
                <div className={artistsAtuais[0] == 0 ? styles.arrowLeftDesableAlbum : styles.arrowLeftAlbum} onClick={previArtists}>
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                </div>
                <div className={styles.itemAlbum} onClick={navDetailsAlbuns}>
                    <div className={styles.containerImgAlbum}><img src={data.albums.items[artistsAtuais[0]].data.coverArt.sources == null ? '/artistsNull.png' : data.albums.items[artistsAtuais[0]].data.coverArt.sources[2].url}></img></div>
                    <h1 className={styles.nameArtists}>{data.albums.items[artistsAtuais[0]].data.name}</h1>
                    <div className={styles.contentText}>
                        {data.albums.items[artistsAtuais[0]].data.artists.items.map((itemArtist) => (
                            <p>{itemArtist.profile.name}</p>
                        ))}
                    </div>
                    <p>{data.albums.items[artistsAtuais[1]].data.date.year}</p>                 
                </div>

                <div className={styles.itemAlbum} onClick={navDetailsAlbuns}>
                    <div className={styles.containerImgAlbum}><img src={data.albums.items[artistsAtuais[1]].data.coverArt.sources == null ? '/artistsNull.png' : data.albums.items[artistsAtuais[1]].data.coverArt.sources[2].url}></img></div>
                    <h1 className={styles.nameArtists}>{data.albums.items[artistsAtuais[1]].data.name}</h1>
                    <div className={styles.contentText}>
                        {data.albums.items[artistsAtuais[1]].data.artists.items.map((itemArtist) => (
                            <p>{itemArtist.profile.name}</p>
                        ))}
                    </div>
                    <p>{data.albums.items[artistsAtuais[1]].data.date.year}</p>                      
                </div>
                <div className={artistsAtuais[1] == 9 ? styles.arrowRightDesableAlbum : styles.arrowRightAlbum} onClick={nextArtists}>
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    )
}