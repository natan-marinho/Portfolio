'use client'

import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { ProjectModal } from '../../components/Dialog';
import { 
    BackgroundGradient, 
    Container, 
    Footer, 
    GlobalStyle, 
    GradientTitle, 
    Header, 
    HeroContent, 
    PinkBlur, 
    ProjectCard, 
    ProjectContent, 
    ProjectDescription, 
    ProjectImage, 
    ProjectsGrid, 
    ProjectsSection, 
    ProjectTitle, 
    PurpleBlur, 
    SocialIcons, 
    Subtitle, 
    Tag, 
    TagsContainer, 
    ViewProjectButton 
} from './style';
import { projects } from './projects';
import Link from 'next/link';

export const Portfolio = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <BackgroundGradient />
        <PurpleBlur />
        <PinkBlur />
        <Container>
          <HeroContent>
            <GradientTitle>Desenvolvedor Criativo</GradientTitle>
            <Subtitle>
              Transformando ideias em experiências digitais extraordinárias
            </Subtitle>
            <SocialIcons>
              <Link href='https://github.com/natan-marinho'><Github/></Link>
              <Link href='https://www.linkedin.com/in/natan-marinho-728238335/'><Linkedin/></Link>
              <Link href='https://github.com/natan-marinho'><Mail/></Link>
            </SocialIcons>
          </HeroContent>
        </Container>
      </Header>

      <ProjectsSection>
        <Container>
          <GradientTitle as="h2" style={{ fontSize: '2.5rem' }}>
            Projetos em Destaque
          </GradientTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectModal 
                key={index} 
                {...project}
                children={
                  <ProjectCard>
                    <ProjectImage src={project.images[0]} alt={project.title} />
                    <ProjectContent>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <TagsContainer>
                        {project.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex}>{tag}</Tag>
                        ))}
                      </TagsContainer>
                      <ViewProjectButton>
                        Ver projeto
                        <ArrowRight size={16} />
                      </ViewProjectButton>
                    </ProjectContent>
                  </ProjectCard>
                }
              />
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>

      <Footer>
        <Container>
          <p>© 2024 Portfolio. Criado com ❤️ por Natan O. Marinho</p>
        </Container>
      </Footer>
    </>
  );
};

export default Portfolio;