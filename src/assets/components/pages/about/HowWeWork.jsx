import React from 'react'

import { Container, Tile } from '../../common'

export const HowWeWork = () => (
  <section className='section'>
    <Container>
      <div className='columns'>
        <div className='column is-10-desktop is-offset-1-desktop'>
          <h2 className='title'>How We Work...</h2>
          <p className='subtitle'>The <strong>Four Paramounts</strong> are values that we place on ourselves to establish the best from our products. These values keep us on track and make sure we do not stray into the technical debts of code. Following the Four Paramounts from beginning to end is our way of certifying the products we create.</p>

          <Tile type='ancestor' vertical>
            <Tile type='parent' size={12}>
              <Tile type='child' size={6} className='paramount' content>
                <figure className='image is-96x96'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#00008b' d='M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z' /></svg>
                </figure>
                <h3 className='has-text-centered'>Flexibility</h3>
                <p>We give our users as many options as possible to provide a <strong>customizable</strong> experience that truly fits their needs. We are capable of doing this by making sure our products are as <strong>un-opinionated</strong> as possible. We also take care that our products can scale horizontally to help you with future company <strong>growth</strong>.</p>
              </Tile>

              <Tile type='child' size={6} className='paramount' content>
                <figure className='image is-96x96'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' style={{ top: 10, position: 'relative' }}><path fill='#00008b' d='M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z' /></svg>
                </figure>
                <h3 className='has-text-centered'>Efficiency</h3>
                <p>FnA Labs gives you optimal <strong>performance</strong> by making sure our products load <strong>fast</strong> and run fast without sacrificing usability. We stay true to all use cases by making sure we are choosing the right programming concepts for the product. Our users will not have to wait and neither will their customers.</p>
              </Tile>
            </Tile>

            <Tile type='parent' size={12}>
              <Tile type='child' size={6} className='paramount' content>
                <figure className='image is-96x96'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#00008b' d='M504.5 171.95l-36.2-36.41c-10-10.05-26.21-10.05-36.2 0L192 377.02 79.9 264.28c-10-10.06-26.21-10.06-36.2 0L7.5 300.69c-10 10.05-10 26.36 0 36.41l166.4 167.36c10 10.06 26.21 10.06 36.2 0l294.4-296.09c10-10.06 10-26.36 0-36.42zM166.57 282.71c6.84 7.02 18.18 7.02 25.21.18L403.85 72.62c7.02-6.84 7.02-18.18.18-25.21L362.08 5.29c-6.84-7.02-18.18-7.02-25.21-.18L179.71 161.19l-68.23-68.77c-6.84-7.02-18.18-7.02-25.2-.18l-42.13 41.77c-7.02 6.84-7.02 18.18-.18 25.2l122.6 123.5z' /></svg>
                </figure>
                <h3 className='has-text-centered'>Quality</h3>
                <p>With careful planning and <strong>validation</strong> we are able to ensure that our code is up to par. We rigorously <strong>test</strong> our products to try to eliminate any bugs that may arise before an official release. Our products are meant to help, not hinder, our users.</p>
              </Tile>

              <Tile type='child' size={6} className='paramount' content>
                <figure className='image is-96x96'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'><path fill='#00008b' d='M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z' /></svg>
                </figure>
                <h3 className='has-text-centered'>Succinctness</h3>
                <p>At FnA Labs we only equip our products with code that is deemed necessary to get the job done. Our projects are a true essence of concise rolls and responsibilities all wrapped up in a <strong>straightforward</strong> package. No fluff included.</p>
              </Tile>
            </Tile>
          </Tile>
        </div>
      </div>
    </Container>
  </section>
)
