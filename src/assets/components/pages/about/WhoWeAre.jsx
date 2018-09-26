import React from 'react'

import { AnalyticsLink, Container, Tile } from '../../common'
import { Card, CardContent, CardFooter } from '../../common/card'
import { Media, MediaImage, MediaContent } from '../../common/media'

const imgAdam = 'https://fnalabs.github.io/fnalabs-assets/assets/fnalabs/adam.96x96.png'
const imgFelicia = 'https://fnalabs.github.io/fnalabs-assets/assets/fnalabs/felicia.96x96.png'

const svgLinkedIn = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' className='svg-inline'><path d='M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z' /></svg>
)

const svgGithub = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' className='svg-inline'><path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' /></svg>
)

export const WhoWeAre = () => (
  <section className='section'>
    <Container>
      <div className='columns'>
        <div className='column is-10-desktop is-offset-1-desktop'>
          <h2 className='title'>Who We Are...</h2>

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
                      <p>I am originally from the Greater Chicago area but have since resided in the Pacific Northwest. I enjoy going for walks, having fun at our neighborhood parks with my family, as well as baking. Watching a good TV show is just one way I like to relax. I also like to know that my communities are taken care of. With over 10 years of experience in customer relations, it gives me great ease to know that my communities are comfy when using our products.</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <AnalyticsLink to='https://www.linkedin.com/in/feliciaeilers/' className='card-footer-item'>
                      <span className='icon'>{svgLinkedIn}</span>
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
                      <p>Besides coding away, I enjoy spending time with my family. I also like to relax by playing video games or watching a movie. I moved to the Pacific Northwest from the Greater Chicago Area with my wife and dog. We have since added to the family and have had many great adventures exploring the wilderness out here. I also take great care in what I create in our Lab. I want to make sure that our products are going to take care of our communities.</p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <AnalyticsLink to='https://www.linkedin.com/in/adameilers/' className='card-footer-item'>
                      <span className='icon'>{svgLinkedIn}</span>
                    </AnalyticsLink>
                    <AnalyticsLink to='https://github.com/aeilers' className='card-footer-item'>
                      <span className='icon'>{svgGithub}</span>
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
