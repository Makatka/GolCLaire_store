import React, {useEffect, useState} from 'react';
import {TestimonialsWrapper, CarouselElements, Container, Author, UserImage, TestimonialsText, FlexWrapper} from "./Testimonials.styles"
import user1 from '../../../assets/image/user1.jpg'
import user2 from '../../../assets/image/user2.jpg'
import user3 from '../../../assets/image/user3.jpg'


const Testimonials = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slide === 0) {
        setSlide(-100)
      } else if (slide === -100) {
        setSlide(-200)
      }else if (slide === -200){
        setSlide(0)
      }

    }, 7000);
    return () => clearTimeout(timer);
  }, [slide]);

  const elements = [
    {
      id: 1,
      imgUrl: 'https://i.postimg.cc/LsWY18DJ/user1.jpg',
      author: 'Jessica Brown',
      authorType: 'Customer',
      testimonialText: 'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit in esse nulla pariatur'
    },
    {
      id: 2,
      imgUrl: `https://i.postimg.cc/1Xh8v7LP/user2.jpg`,
      author: 'Calleb Hoffman',
      authorType: 'Customer',
      testimonialText: 'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit in esse nulla pariatur'
    },
    {
      id: 1,
      imgUrl: `https://i.postimg.cc/nzQsYfS0/user3.jpg`,
      author: 'Bradley Kim',
      authorType: 'Customer',
      testimonialText: 'This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit in esse nulla pariatur'
    }
  ]


  return (
    <TestimonialsWrapper>
      <CarouselElements sliderNumber={slide}>
        <Container>
          <FlexWrapper>
            <UserImage style={{backgroundImage: `url(${elements[0].imgUrl})`}}/>
            <Author>
              <h5>{elements[0].author}</h5>
              <span>{elements[0].authorType}</span>
            </Author>
          </FlexWrapper>
          <TestimonialsText>
            <p>{elements[0].testimonialText}</p>
          </TestimonialsText>
        </Container>
        <Container>
          <FlexWrapper>
            <UserImage style={{backgroundImage: `url(${elements[1].imgUrl})`}}/>
            <Author>
              <h5>{elements[1].author}</h5>
              <span>{elements[1].authorType}</span>
            </Author>
          </FlexWrapper>
          <TestimonialsText>
            <p>{elements[1].testimonialText}</p>
          </TestimonialsText>
        </Container>
        <Container>
          <FlexWrapper>
            <UserImage style={{backgroundImage: `url(${elements[2].imgUrl})`}}/>
            <Author>
              <h5>{elements[2].author}</h5>
              <span>{elements[2].authorType}</span>
            </Author>
          </FlexWrapper>
          <TestimonialsText>
            <p>{elements[2].testimonialText}</p>
          </TestimonialsText>
        </Container>

      </CarouselElements>
    </TestimonialsWrapper>

  );
};


export default Testimonials;