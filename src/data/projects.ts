export type ProjectCategory = 'Computer Vision' | 'Data Science' | 'Explainable AI'

export interface Project {
  title: string
  category: ProjectCategory
  description: string
  image: string
  alt: string
  highlights: string[]
  tags: string[]
  metrics: { label: string; value: string }[]
  repository: string
  imagePosition?: string
}

export const projects: Project[] = [
  {
    title: 'Flower Classification',
    category: 'Computer Vision',
    description: 'A flower image-classification project using the Oxford 102 Flowers dataset, comparing machine learning and deep learning models across 102 categories.',
    image: '/images/projects/flower-model-comparison.png',
    alt: 'Model comparison chart from the Flower Classification repository',
    highlights: ['102 flower classes', 'Comparative model evaluation', 'Transfer learning', 'Reproducible evaluation workflow'],
    tags: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'VGG16', 'NASNet-Mobile', 'XGBoost'],
    metrics: [{ label: 'Classes', value: '102' }, { label: 'Models', value: '4' }, { label: 'Domain', value: 'Computer Vision' }],
    repository: 'https://github.com/fatemehsabourinia/Flower-Classification',
  },
  {
    title: 'Dog Breed Recognition',
    category: 'Computer Vision',
    description: 'A fine-grained dog-breed image-classification project covering 120 classes and comparing traditional machine learning with deep learning approaches.',
    image: '/images/projects/dog-model-comparison.png',
    alt: 'Model comparison chart from the Dog Breed Recognition repository',
    highlights: ['120 dog-breed classes', 'Fine-grained classification', 'Traditional and deep learning approaches', 'Reproducible experimental workflow'],
    tags: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'EfficientNetB0', 'NASNet-Mobile', 'Random Forest'],
    metrics: [{ label: 'Classes', value: '120' }, { label: 'Domain', value: 'Computer Vision' }, { label: 'Framework', value: 'TensorFlow' }],
    repository: 'https://github.com/fatemehsabourinia/Dog-Breed-Recognition',
  },
  {
    title: 'ADHD Data Science & Machine Learning',
    category: 'Data Science',
    description: 'A responsible machine learning study for experimental ADHD outcome prediction using multimodal behavioural, demographic, psychometric, and functional-connectivity data.',
    image: '/images/projects/adhd-ml-pipeline.svg',
    alt: 'Aggregate preprocessing and evaluation pipeline from the ADHD Data Science and Machine Learning repository',
    highlights: ['Multimodal feature preparation', 'Four classifier families', 'Comparative evaluation', 'Exploratory fairness analysis'],
    tags: ['Python', 'Scikit-learn', 'Logistic Regression', 'Random Forest', 'Gradient Boosting', 'CatBoost', 'Fairness Analysis'],
    metrics: [{ label: 'Models', value: '4' }, { label: 'Domain', value: 'Responsible ML' }, { label: 'Validation', value: 'Internal experiment' }],
    repository: 'https://github.com/fatemehsabourinia/ADHD-Data-Science-ML',
  },
  {
    title: 'ADHD Explainable AI',
    category: 'Explainable AI',
    description: 'An explainable AI framework for experimental ADHD outcome classification integrating SHAP and Kernel PCA across multiple machine learning algorithms.',
    image: '/images/projects/adhd-xai-shap.png',
    alt: 'Aggregate XGBoost SHAP summary from the ADHD Explainable AI repository',
    highlights: ['SHAP-based interpretation', 'Kernel PCA feature representation', 'Multiple algorithm comparison', 'Responsible-use boundaries'],
    tags: ['Python', 'SHAP', 'Kernel PCA', 'XGBoost', 'LightGBM', 'Scikit-learn', 'Model Interpretability'],
    metrics: [{ label: 'Method', value: 'SHAP' }, { label: 'Domain', value: 'Explainable AI' }, { label: 'Task', value: 'Classification' }],
    repository: 'https://github.com/fatemehsabourinia/ADHD-Explainable-AI',
  },
]
