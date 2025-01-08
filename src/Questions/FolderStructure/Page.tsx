import React, { useState } from 'react'

const Page = () => {
  const folderData = {
    name: 'my-react-app',
    type: 'directory',
    children: [
      {
        name: 'public',
        type: 'directory',
        children: [
          {
            name: 'index.html',
            type: 'file',
            extension: '.html'
          },
          {
            name: 'favicon.ico',
            type: 'file',
            extension: '.ico'
          }
        ]
      },
      {
        name: 'src',
        type: 'directory',
        children: [
          {
            name: 'assets',
            type: 'directory',
            children: [
              {
                name: 'logo.png',
                type: 'file',
                extension: '.png'
              },
              {
                name: 'background.jpg',
                type: 'file',
                extension: '.jpg'
              }
            ]
          },
          {
            name: 'components',
            type: 'directory',
            children: [
              {
                name: 'Header.js',
                type: 'file',
                extension: '.js'
              },
              {
                name: 'Footer.js',
                type: 'file',
                extension: '.js'
              }
            ]
          },
          {
            name: 'pages',
            type: 'directory',
            children: [
              {
                name: 'HomePage.js',
                type: 'file',
                extension: '.js'
              },
              {
                name: 'AdminPage.js',
                type: 'file',
                extension: '.js'
              }
            ]
          },
          {
            name: 'styles',
            type: 'directory',
            children: [
              {
                name: 'App.css',
                type: 'file',
                extension: '.css'
              },
              {
                name: 'index.css',
                type: 'file',
                extension: '.css'
              }
            ]
          },
          {
            name: 'App.js',
            type: 'file',
            extension: '.js'
          },
          {
            name: 'index.js',
            type: 'file',
            extension: '.js'
          },
          {
            name: 'routes',
            type: 'directory',
            children: [
              {
                name: 'ProtectedRoute.js',
                type: 'file',
                extension: '.js'
              }
            ]
          }
        ]
      },
      {
        name: '.gitignore',
        type: 'file',
        extension: '.gitignore'
      },
      {
        name: 'package.json',
        type: 'file',
        extension: '.json'
      },
      {
        name: 'README.md',
        type: 'file',
        extension: '.md'
      },
      {
        name: 'node_modules',
        type: 'directory',
        children: []
      }
    ]
  }

  return (
    <div>
      <Folder folder={folderData} />
    </div>
  )
}
const Folder = ({ folder }) => {
    // State to track if the current folder is open (expanded)
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div>
          {/* Click to toggle folder visibility */}
          <h2 
            onClick={() => setIsOpen(!isOpen)} 
            className='cursor-pointer'>
            {folder.name} {folder.type === 'directory' ? '📁' : '📄'}
          </h2>
  
          {/* If folder is a directory and is open, render its children */}
          {isOpen  && (
            <div style={{ marginLeft: '20px' }}>
              {folder.children.map((child, index) => (
                <Folder key={index} folder={child} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
export default Page
