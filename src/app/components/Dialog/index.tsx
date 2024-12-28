import { useState } from 'react';
import { 
    Root, 
    Trigger, 
    Portal,  // Adicione esta importação
    Content, 
    Title, 
    Description, 
    Close 
} from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { 
    CloseButton, 
    ModalContent, 
    ModalImage, 
    ModalOverlay, 
    ModalTag, 
    TagList,
    ImageNavigation,
    ImageContainer,
    NavigationButton,
    ImageIndicators,
    ImageIndicator,
    GitHubButton
} from './style';

export const ProjectModal = ({ children, title, description, images, tags, githubUrl }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Root>
      <Trigger asChild>
        {children}
      </Trigger>

      <Portal> {/* Adicione o Portal aqui */}
        <Content>
          <ModalOverlay>
            <ModalContent>
              <Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                {title}
              </Title>
              
              <ImageContainer>
                <ModalImage src={images[currentImage]} alt={title} />
                
                {images.length > 1 && (
                  <>
                    <ImageNavigation>
                      <NavigationButton onClick={previousImage}>
                        <ChevronLeft />
                      </NavigationButton>
                      <NavigationButton onClick={nextImage}>
                        <ChevronRight />
                      </NavigationButton>
                    </ImageNavigation>

                    <ImageIndicators>
                      {images.map((_, index) => (
                        <ImageIndicator
                          key={index}
                          $active={currentImage === index}
                          onClick={() => setCurrentImage(index)}
                        />
                      ))}
                    </ImageIndicators>
                  </>
                )}
              </ImageContainer>
              
              <Description style={{ color: '#666', lineHeight: '1.6' }}>
                {description}
              </Description>

              <TagList>
                {tags.map((tag, index) => (
                  <ModalTag key={index}>{tag}</ModalTag>
                ))}
              </TagList>

              {githubUrl && (
                <GitHubButton 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  Ver no GitHub
                </GitHubButton>
              )}

              <Close asChild>
                <CloseButton>X</CloseButton>
              </Close>
            </ModalContent>
          </ModalOverlay>
        </Content>
      </Portal>
    </Root>
  );
};