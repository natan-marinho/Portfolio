// components/Dialog/style.ts
import styled from 'styled-components';
import { theme } from '../../theme';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  isolation: isolate;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.colors.modal.background};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  border: 1px solid ${theme.colors.modal.border};
  color: ${theme.colors.modal.text};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 51;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${theme.colors.modal.tag};
  border: 1px solid ${theme.colors.modal.border};
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;
  color: ${theme.colors.modal.text};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002; // Garantindo que fique acima das imagens
  
  &:hover {
    background: ${theme.colors.modal.hover};
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid ${theme.colors.modal.border};
`;

export const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const ModalTag = styled.span`
  background: ${theme.colors.modal.tag};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid ${theme.colors.modal.border};
`;

export const ImageNavigation = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 1001; // Garantindo que os botões fiquem acima da imagem
`;

export const NavigationButton = styled.button`
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid ${theme.colors.modal.border};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.modal.text};
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export const ImageIndicators = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 1001;
`;

export const ImageIndicator = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? 
    theme.colors.text.primary : 
    'rgba(255, 255, 255, 0.3)'};
  border: 1px solid ${theme.colors.modal.border};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
    background: ${props => props.$active ? 
      theme.colors.text.primary : 
      'rgba(255, 255, 255, 0.5)'};
  }
`;

export const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #24292e;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #2f363d;
  }

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: translateX(2px);
  }
`;