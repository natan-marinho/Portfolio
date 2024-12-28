import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../../theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text.primary};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Header = styled.header`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, ${theme.colors.gradient.start}, ${theme.colors.gradient.end});
`;

export const PurpleBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 18rem;
  height: 18rem;
  background-color: ${theme.colors.blur.purple};
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
`;

export const PinkBlur = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24rem;
  height: 24rem;
  background-color: ${theme.colors.blur.pink};
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  width: 90%;
`;

export const GradientTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, ${theme.colors.gradient.purple}, ${theme.colors.gradient.pink});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const Subtitle = styled.p`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: ${theme.colors.text.tertiary};
  margin-bottom: 2rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;

  a > svg {
    color: white;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.gradient.purple};
    }
  }
`;

export const ProjectsSection = styled.main`
  padding: 6rem 0;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

export const ProjectCard = styled.div`
  position: relative;
  background: ${theme.colors.overlay.light};
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.overlay.light};
    transform: translateY(-4px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 14rem;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 2rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

export const ProjectDescription = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
  padding: 0.25rem 1rem;
  background: ${theme.colors.overlay.light};
  backdrop-filter: blur(4px);
  border-radius: 9999px;
  font-size: 0.875rem;
`;

export const ViewProjectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${theme.colors.gradient.purple};
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;

  &:hover {
    color: ${theme.colors.gradient.pink};

    svg {
      transform: translateX(4px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

export const Footer = styled.footer`
  background: ${theme.colors.overlay.light};
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  text-align: center;
  color: ${theme.colors.text.secondary};
`;

