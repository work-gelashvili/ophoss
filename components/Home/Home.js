"use client"

import React from 'react'
import Project from './Project/Project'
import Services from './Services/Services'
import Work from './Work/Work'
import { Welcome } from './Welcome'
import Contact from '@components/Contact/Contact'
import { About } from './About'
import Team from './Team/Team'

export const Home = () => {
    return (
        <>
            <Welcome />
            <Project />
            <Services />
            <Work />
            <About />
            <Team />
            <Contact />
        </>
    )
}
