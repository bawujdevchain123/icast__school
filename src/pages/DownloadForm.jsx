import React from 'react'
import logo from '../../public/images/logo.png'

const DownloadForm = () => {
  return (
    <main className="form__download">
        <div className="form__download-container">
            <section className="logo">
                <div className="image__container logo">
                    <img src={logo} className='logo' alt="school__logo" height="200px" width="200px"/>
                </div>
            </section> 
            <section className="content">
                <div className="content__container">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolores quibusdam ab. Labore aspernatur fugiat voluptatibus dicta voluptatum. Quibusdam, cum?</p>
                    <a href="/public/testing.pdf" download></a><button>download</button>
                </div>
            </section> 
        </div>
    </main>
  )
}

export default DownloadForm