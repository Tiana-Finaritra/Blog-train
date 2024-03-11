import React from 'react'
import styles from '../../../page.module.css'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BlogList from '@/app/components/ListBlogs'
import { notFound } from 'next/navigation'


const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
}
export default function page({ params }: { params: { id: number } }) {
  const imageUrl = `https://picsum.photos/200/300?random=${params.id}`;  
  return params.id < 1 || params.id > 10 ? notFound() : (
    <main className={styles.main}>
      <Header />
      <div style={style}>
        <BlogList />
        <div>
            <h2>Number of page: {params.id}</h2>
            <Image src={imageUrl} alt='' width={200} height={300} />
        </div>  
      </div>   
      <Footer />
    </main>
  )
}