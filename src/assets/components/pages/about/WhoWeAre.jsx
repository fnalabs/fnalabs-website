import React from 'react'

import { AnalyticsLink, Container, Tile } from 'common'
import { Card, CardContent, CardFooter } from 'common/card'
import { Media, MediaImage, MediaContent } from 'common/media'
import { LinkedIn, Github } from 'icons'

const imgAdam = 'https://fnalabs.github.io/fnalabs-assets/assets/fnalabs/adam.96x96.png'
const imgFelicia = 'https://fnalabs.github.io/fnalabs-assets/assets/fnalabs/felicia.96x96.png'

export const WhoWeAre = () => (
  <section className='section'>
    <Container>
      <div className='columns'>
        <div className='column is-10-desktop is-offset-1-desktop'>
          <h2 className='title'>Who We Are</h2>

          <Tile type='ancestor'>
            <Tile type='parent'>
              <Tile type='child' className='card-container'>
                <Card>
                  <CardContent>
                    <Media>
                      <MediaImage imgAlt='Felicia Eilers' imgSrc={imgFelicia} />
                      <MediaContent title='Felicia Eilers' subtitle='Co-Owner' />
                    </Media>

                    <div className='content'>
                      <p>I enjoy going for walks, having fun at our neighborhood parks with my family, as well as baking. Watching a good TV show is just one way I like to relax. I also like to know that my communities are taken care of. With over 10 years of experience in customer relations, it gives me great ease to know that my communities are comfy when using our products.</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <AnalyticsLink to='https://www.linkedin.com/in/feliciaeilers/' className='card-footer-item'>
                      <span className='icon'><LinkedIn /></span>
                    </AnalyticsLink>
                  </CardFooter>
                </Card>
              </Tile>
            </Tile>

            <Tile type='parent'>
              <Tile type='child' className='card-container'>
                <Card>
                  <CardContent>
                    <Media>
                      <MediaImage imgAlt='Adam Eilers' imgSrc={imgAdam} />
                      <MediaContent title='Adam Eilers' subtitle='Co-Owner' />
                    </Media>

                    <div className='content'>
                      <p>Besides coding away, I enjoy spending time with my family. I also like to relax by playing video games or watching a movie. We have since added to the family and have had many great adventures exploring the wilderness out here. I also take great care in what I create in our Lab. I want to make sure that our products are going to take care of our communities.</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <AnalyticsLink to='https://www.linkedin.com/in/adameilers/' className='card-footer-item'>
                      <span className='icon'><LinkedIn /></span>
                    </AnalyticsLink>
                    <AnalyticsLink to='https://github.com/aeilers' className='card-footer-item'>
                      <span className='icon'><Github className='svg-inline' /></span>
                    </AnalyticsLink>
                  </CardFooter>
                </Card>
              </Tile>
            </Tile>
          </Tile>
        </div>
      </div>
    </Container>
  </section>
)
