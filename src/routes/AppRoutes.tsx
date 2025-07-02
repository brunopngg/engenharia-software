import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Layout e Páginas Principais
import PageLayout from '../components/Layout/PageLayout';
import Home from '../pages/Home/Home';
import Teoria from '../pages/Teoria/Teoria';
import Simulacoes from '../pages/Simulacoes/Simulacoes';
import Exercicios from '../pages/Exercicios/Exercicios';
import Configuracoes from '../pages/Configuracoes/Configuracoes';

// Componente de Conteúdo Placeholder
import ContentPlaceholder from '../components/ContentPlaceholder/ContentPlaceholder';

// Páginas de Teoria
import TeoriaLimites from '../pages/Teoria/Limites/TeoriaLimites';
import TeoriaDerivadas from '../pages/Teoria/Derivadas/TeoriaDerivadas';
import TeoriaIntegrais from '../pages/Teoria/Integrais/TeoriaIntegrais';

// Páginas de Exercícios
import ExerciciosLimites from '../pages/Exercicios/ExerciciosLimites';
import ExerciciosDerivadas from '../pages/Exercicios/ExerciciosDerivadas';
import ExerciciosIntegrais from '../pages/Exercicios/ExerciciosIntegrais';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/teoria',
    element: <PageLayout title="Módulo Teórico" />,
    children: [
        { index: true, element: <Teoria /> },
        { path: 'limites', element: <TeoriaLimites /> },
        { path: 'limites/conceitos-fundamentais', element: <ContentPlaceholder title="Conceitos Fundamentais de Limites" /> },
        { path: 'limites/tecnicas-de-calculo', element: <ContentPlaceholder title="Técnicas de Cálculo de Limites" /> },
        { path: 'limites/indeterminacoes', element: <ContentPlaceholder title="Indeterminações" /> },
        { path: 'limites/continuidade', element: <ContentPlaceholder title="Continuidade" /> },
        { path: 'derivadas', element: <TeoriaDerivadas /> },
        { path: 'derivadas/conceitos-fundamentais', element: <ContentPlaceholder title="Conceitos Fundamentais de Derivadas" /> },
        { path: 'derivadas/regras-de-derivacao', element: <ContentPlaceholder title="Regras de Derivação" /> },
        { path: 'derivadas/aplicacoes', element: <ContentPlaceholder title="Aplicações de Derivadas" /> },
        { path: 'integrais', element: <TeoriaIntegrais /> },
        { path: 'integrais/conceitos-fundamentais', element: <ContentPlaceholder title="Conceitos Fundamentais de Integrais" /> },
        { path: 'integrais/tecnicas-de-integracao', element: <ContentPlaceholder title="Técnicas de Integração" /> },
        { path: 'integrais/aplicacoes', element: <ContentPlaceholder title="Aplicações de Integrais" /> },
    ]
  },
  { path: '/simulacoes', element: <Simulacoes /> },
  {
    path: '/exercicios',
    element: <PageLayout title="Módulo de Exercícios" />,
    children: [
        { index: true, element: <Exercicios /> },
        { path: 'limites', element: <ExerciciosLimites /> },
        { path: 'derivadas', element: <ExerciciosDerivadas /> },
        { path: 'integrais', element: <ExerciciosIntegrais /> },
    ]
  },
  { path: '/configuracoes', element: <Configuracoes /> },
  { path: '*', element: <Navigate to="/" /> }
]);
