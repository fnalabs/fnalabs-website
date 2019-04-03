import React from 'react'

import { Container, Tile } from 'common'
import { Efficiency, Flexibility, Quality, Succinctness } from 'icons'

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
                  <Flexibility />
                </figure>
                <h3 className='has-text-centered'>Flexibility</h3>
                <p>We give our users as many options as possible to provide a <strong>customizable</strong> experience that truly fits their needs. We are capable of doing this by making sure our products are as <strong>un-opinionated</strong> as possible. We also take care that our products can scale horizontally to help you with future company <strong>growth</strong>.</p>
              </Tile>

              <Tile type='child' size={6} className='paramount' content>
                <figure className='image is-96x96'>
                  <Efficiency />
                </figure>
                <h3 className='has-text-centered'>Efficiency</h3>
                <p>FnA Labs gives you optimal <strong>performance</strong> by making sure our products load <strong>fast</strong> and run fast without sacrificing usability. We stay true to all use cases by making sure we are choosing the right programming concepts for the product. Our users will not have to wait and neither will their customers.</p>
              </Tile>
            </Tile>

            <Tile type='parent' size={12}>
              <Tile type='child' size={6} className='paramount' content>
                <figure className='image is-96x96'>
                  <Quality />
                </figure>
                <h3 className='has-text-centered'>Quality</h3>
                <p>With careful planning and <strong>validation</strong> we are able to ensure that our code is up to par. We rigorously <strong>test</strong> our products to try to eliminate any bugs that may arise before an official release. Our products are meant to help, not hinder, our users.</p>
              </Tile>

              <Tile type='child' size={6} className='paramount' content>
                <figure className='image is-96x96'>
                  <Succinctness />
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
