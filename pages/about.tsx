import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iusto mollitia enim explicabo voluptates culpa repellendus voluptate recusandae architecto porro, laudantium saepe distinctio necessitatibus laboriosam, dicta quibusdam cupiditate quaerat! Et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus rem incidunt omnis, rerum velit laudantium nihil quisquam optio assumenda aperiam, quo reprehenderit sint quis deleniti molestiae facere totam maxime aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, atque rerum error nobis veritatis velit necessitatibus dicta totam delectus nisi laudantium ex officiis aut, reprehenderit id. Eaque nulla minima debitis.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    )
}