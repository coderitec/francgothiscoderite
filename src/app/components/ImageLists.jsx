"use client"
import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'
ImageListItem
import Image from 'next/image'
import { imageData } from './data'

export default function ImageLists() {
  return (
    <div>
        <ImageList variant="masonry" cols={3} gap={8}>
        {imageData.map((item,index) => (
            <ImageListItem key={index}>
            <Image
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=248&fit=crop&auto=format`}
                alt={item}
                width={'400'}
                height={'400'}
                loading='lazy'
             
            />
            </ImageListItem>
        ))}
        </ImageList>
    </div>
  )
}
