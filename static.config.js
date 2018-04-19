//import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import data from './src/projects/postdata.json';
import project_data from './src/projects/projectdata.json';
import profile_data from './src/projects/profiledata.json';
import React, { Component } from 'react'

export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta name="description" content= "Portfolio Site for BoomTech"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>BoomTechNY</title>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  getSiteProps: () => ({
    title: 'BoomTech',
    
  }),
  getRoutes: async () => {
    const { posts } = data;
    const { projects } = project_data; 
    const { profile } = profile_data; 

  return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({ 
          projects, profile
        }),
      }, 
      {
        path: '/work',
        component: 'src/containers/Work',
        getProps: () => ({
          projects,
        }),
        children: projects.map(project => ({
          path: `/project/${project.id}`,
          component: 'src/containers/Project',
          getProps: () => ({
            project,
          }),
        })),
      },
      {
        path: '/profile',
        component: 'src/containers/Profile',
        getProps:()=>({
          profile,
        })
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
     ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === 'dev'
                ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
                : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                      },
                    },
                    {
                      loader: 'sass-loader',
                      options: { includePaths: ['src/'] },
                    },
                  ],
                }),
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
