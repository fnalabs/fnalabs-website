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
                      <p>I enjoy going for walks, having fun at our neighborhood parks with my family, as well as baking. With over 10 years of experience in business relations, it gives me great pleasure to know that FnA Labs can help our communities in giving the people a product they deserve.</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <AnalyticsLink to='https://www.linkedin.com/in/feliciaeilers/' className='card-footer-item' aria-label='LinkedIn'>
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
                      <p>I take great care in what I research and develop in our Lab to ensure our products are of superior quality. Besides coding away, I enjoy spending time with my family. We have had many great adventures exploring the wilderness by bicycle or on foot. I also like to relax by playing video games or watching movies.</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <AnalyticsLink to='https://www.linkedin.com/in/adameilers/' className='card-footer-item' aria-label='LinkedIn'>
                      <span className='icon'><LinkedIn /></span>
                    </AnalyticsLink>
                    <AnalyticsLink to='https://github.com/aeilers' className='card-footer-item' aria-label='github'>
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
