import React, { type FC } from 'react'
import {
  remoteCard,
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteHero,
  remoteIcon,
  remoteMedia,
  remoteSection
} from '../../remotes'

const Card = React.lazy(remoteCard)
const Column = React.lazy(remoteColumn)
const Columns = React.lazy(remoteColumns)
const Container = React.lazy(remoteContainer)
const Hero = React.lazy(remoteHero)
const Icon = React.lazy(remoteIcon)
const Media = React.lazy(remoteMedia)
const Section = React.lazy(remoteSection)

const imgAdam = 'https://fnalabs.github.io/fnalabs-assets/assets/fnalabs/adam.96x96.png'
const imgFelicia = 'https://fnalabs.github.io/fnalabs-assets/assets/fnalabs/felicia.96x96.png'

const About: FC = () => (
  <>
    <Hero color='dark' bold>
      <Container>
        <Columns>
          <Column numericSize='8-desktop' numericSizeOffset='2-desktop'>
            <Columns>
              <Column numericSize={3}>
                product logo
              </Column>

              <Column content>
                <article>
                  <h1 className='title'>About</h1>
                  <p>FnA Labs, a research and development company, was founded in 2018 by my husband and I. However, the company has existed within both of us for quite some time. We are a modern mom and pop shop trying to enrich communities in both the physical and digital world. Our goal is to make sure that we can help out one community at a time by providing you products of quality and value. FnA Labs is here to help evolve the industry and give our customers the ultimate quality in products.</p>
                </article>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Hero>

    <Section>
      <Container>
        <Columns>
          <Column numericSize='10-desktop' numericSizeOffset='1-desktop'>
            <h2 className='title'>Who We Are</h2>

            <Columns>
              <Column numericSize='6-desktop'>
                <Card footer={(<a href='https://github.com/feilers' className='card-footer-item' aria-label='github'><Icon style='brands' name='github' /></a>)}>
                  <Media
                    imgSrc={imgFelicia}
                    imgAlt='Felicia Eilers'
                    title='Felicia Eilers'
                    subtitle='Co-Owner'
                  />
                  <p>I enjoy going for walks, having fun at our neighborhood parks with my family, as well as baking. With over 10 years of experience in business relations, it gives me great pleasure to know that FnA Labs can help our communities in giving the people a product they deserve.</p>

                </Card>
              </Column>

              <Column numericSize='6-desktop'>
                <Card footer={(<a href='https://github.com/aeilers' className='card-footer-item' aria-label='github'><Icon style='brands' name='github' /></a>)}>
                  <Media
                    imgSrc={imgAdam}
                    imgAlt='Adam Eilers'
                    title='Adam Eilers'
                    subtitle='Co-Owner'
                  />
                  <p>I take great care in what I research and develop in our Lab to ensure our products are of superior quality. Besides coding away, I enjoy spending time with my family. We have had many great adventures exploring the wilderness by bicycle or on foot. I also like to relax by playing video games or watching movies.</p>
                </Card>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Columns>
          <Column numericSize='10-desktop' numericSizeOffset='1-desktop'>
            <h2 className='title'>How We Work</h2>
            <p className='subtitle'>The <strong>Five Paramounts</strong> are values that we place on ourselves to establish the best from our products. These values keep us on track and make sure we do not stray into the technical debts of code. Following the Five Paramounts from beginning to end is our way of certifying the products we create.</p>

            <Columns multiline>
              <Column numericSize={12}>
                <Columns>
                  <Column numericSize='6-desktop' numericSizeOffset='3-desktop'>
                    <h3 className='has-text-centered'>Privacy</h3>
                    <p>We strive to keep your information private. Your information is not sold to third parties. What information we gather is for FnA Labs only and is only used to help make a better product for you.</p>
                  </Column>
                </Columns>
              </Column>

              <Column numericSize={12}>
                <Columns>
                  <Column numericSize='6-desktop'>
                    <h3 className='has-text-centered'>Flexibility</h3>
                    <p>We give our users as many options as possible to provide a <strong>customizable</strong> experience that truly fits their needs. We are capable of doing this by making sure our products are as <strong>un-opinionated</strong> as possible. We also take care that our products can scale horizontally to help you with future company <strong>growth</strong>.</p>
                  </Column>

                  <Column numericSize='6-desktop'>
                    <h3 className='has-text-centered'>Efficiency</h3>
                    <p>FnA Labs gives you optimal <strong>performance</strong> by making sure our products load and run <strong>fast</strong> without sacrificing usability. We stay true to all use cases by choosing the right programming concepts for the solution. Our users will not have to wait and neither will their customers.</p>
                  </Column>
                </Columns>
              </Column>

              <Column numericSize={12}>
                <Columns>
                  <Column numericSize='6-desktop'>
                    <h3 className='has-text-centered'>Quality</h3>
                    <p>With careful planning and <strong>validation</strong>, we can ensure that our code is up to par. We rigorously <strong>test</strong> our products to try to eliminate any bugs that may arise before an official release. Our products are to help, not hinder, our users.</p>
                  </Column>

                  <Column numericSize='6-desktop'>
                    <h3 className='has-text-centered'>Succinctness</h3>
                    <p>At FnA Labs we only equip our products with code that is deemed necessary to get the job done. Our projects are a true essence of concise roles and responsibilities all wrapped up in a <strong>straightforward</strong> package.</p>
                  </Column>
                </Columns>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Section>
  </>
)
export default About
