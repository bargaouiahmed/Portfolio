import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './Project.css';

interface ProjectProps {
    name: string;
    description?: string;
    images?: string[];
}

export default function Project({ name, description = '', images = [] }: ProjectProps) {
    const [previewIndex, setPreviewIndex] = useState<number | null>(null);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setPreviewIndex(null);
            if (e.key === 'ArrowRight' && previewIndex !== null) setPreviewIndex((i) => (i! + 1) % images.length);
            if (e.key === 'ArrowLeft' && previewIndex !== null)
                setPreviewIndex((i) => (i! - 1 + images.length) % images.length);
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [previewIndex, images.length]);

    const openPreview = (idx: number) => setPreviewIndex(idx);
    const closePreview = () => setPreviewIndex(null);

    return (
        <div className="project">
            <h3 className="project-title">{name}</h3>
            {description && <p className="project-description">{description}</p>}

            {images && images.length > 0 && (
                <div className="project-slider" role="list">
                    {images.map((src, idx) => (
                        <div className="project-image-wrap" key={idx} role="listitem">
                            <img
                                src={src}
                                alt={`${name} screenshot ${idx + 1}`}
                                className="project-image"
                                onClick={() => openPreview(idx)}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            )}

            {previewIndex !== null && images && images[previewIndex] && createPortal(
                <div className="project-preview" onClick={closePreview} role="dialog" aria-modal="true">
                    <button
                        className="project-preview-close"
                        onClick={(e) => { e.stopPropagation(); closePreview(); }}
                        aria-label="Close preview"
                    >
                        ×
                    </button>
                    <img src={images[previewIndex]} alt={`${name} preview`} onClick={(e) => e.stopPropagation()} />

                    {images.length > 1 && (
                        <>
                            <button
                                className="project-preview-nav left"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setPreviewIndex((previewIndex - 1 + images.length) % images.length);
                                }}
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            <button
                                className="project-preview-nav right"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setPreviewIndex((previewIndex + 1) % images.length);
                                }}
                                aria-label="Next image"
                            >
                                ›
                            </button>
                        </>
                    )}
                </div>,
                document.body
            )}
        </div>
    );
}