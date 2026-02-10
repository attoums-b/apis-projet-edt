/**
 * Composant Button - Bouton réutilisable
 * Composant générique pour les boutons avec différents styles et tailles
 */

import React from 'react';
import './Button.css';

/**
 * Composant Button
 * @param {Object} props - Props du composant
 * @param {ReactNode} props.children - Contenu du bouton
 * @param {string} props.variant - Variante du bouton (primary, secondary, success, danger, outline)
 * @param {string} props.size - Taille du bouton (sm, md, lg)
 * @param {boolean} props.disabled - Bouton désactivé
 * @param {boolean} props.fullWidth - Bouton pleine largeur
 * @param {Function} props.onClick - Fonction appelée au clic
 * @param {string} props.type - Type du bouton (button, submit, reset)
 * @param {ReactNode} props.icon - Icône à afficher
 * @param {string} props.className - Classes CSS supplémentaires
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  icon,
  className = '',
  ...rest
}) => {
  // Construction des classes CSS
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {/* Affichage de l'icône si fournie */}
      {icon && <span className="btn-icon">{icon}</span>}
      
      {/* Contenu du bouton */}
      {children && <span className="btn-content">{children}</span>}
    </button>
  );
};

export default Button;
