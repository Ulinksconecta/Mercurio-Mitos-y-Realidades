import React, { useState } from 'react';
import { 
  AlertTriangle, 
  BookOpen, 
  Download, 
  Shield, 
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  Globe,
  Users,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import ChatBot from './components/ChatBot';
import logoEmprendeConecta from './assets/logo-emprendeconecta.jpg';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const sections = [
    { id: 'home', title: 'Inicio', icon: <Globe size={20} /> },
    { id: 'mito', title: 'El Mito del "Mercurio Rojo"', icon: <AlertTriangle size={20} /> },
    { id: 'realidad', title: 'Hg2Sb2O7: La Realidad', icon: <BookOpen size={20} /> },
    { id: 'convenio', title: 'Convenio de Minamata', icon: <Shield size={20} /> },
    { id: 'mexico', title: 'Situación en México', icon: <Users size={20} /> },
    { id: 'recursos', title: 'Recursos', icon: <FileText size={20} /> }
  ];

  const comparisonData = [
    {
      caracteristica: 'Naturaleza',
      mercurioRojo: 'Sustancia ficticia, engaño',
      hg2sb2o7: 'Compuesto químico real',
      status: 'different'
    },
    {
      caracteristica: 'Estado físico',
      mercurioRojo: 'Líquido (según el mito)',
      hg2sb2o7: 'Sólido cristalino',
      status: 'different'
    },
    {
      caracteristica: 'Color',
      mercurioRojo: 'Rojo cereza brillante',
      hg2sb2o7: 'Variable, no consistente',
      status: 'different'
    },
    {
      caracteristica: 'Fórmula química',
      mercurioRojo: 'Hg2Sb2O7 (falsa)',
      hg2sb2o7: 'Hg2Sb2O7 (real)',
      status: 'same'
    },
    {
      caracteristica: 'Propiedades',
      mercurioRojo: 'Fantásticas/milagrosas',
      hg2sb2o7: 'Químicas normales',
      status: 'different'
    },
    {
      caracteristica: 'Disponibilidad',
      mercurioRojo: 'No existe',
      hg2sb2o7: 'Síntesis especializada',
      status: 'different'
    }
  ];

  const faqs = [
    {
      question: "¿Por qué es importante conocer sobre este tema?",
      answer: "Conocer la diferencia entre el mito del 'Mercurio Rojo' y la realidad del Hg2Sb2O7 es crucial para evitar fraudes, proteger inversiones y tomar decisiones informadas en el ámbito comercial y científico."
    },
    {
      question: "¿Cómo puedo verificar si una oferta es legítima?",
      answer: "Solicita documentación oficial, verifica licencias, consulta con autoridades competentes como COFEPRIS y SEMARNAT, y desconfía de ofertas que prometan propiedades extraordinarias."
    },
    {
      question: "¿Qué hacer si ya invertí en 'Mercurio Rojo'?",
      answer: "Contacta inmediatamente a las autoridades, busca asesoría legal, documenta todas las transacciones y reporta el fraude para ayudar a prevenir que otros sean víctimas."
    }
  ];

  const renderHome = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg">
        <img 
          src={logoEmprendeConecta} 
          alt="EMPRENDECONECTA" 
          className="mx-auto mb-8 h-32 w-auto rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">Centro Educativo sobre Mercurio</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Aprende la verdad sobre el "Mercurio Rojo", conoce el Hg2Sb2O7 real y entiende 
          las regulaciones internacionales para tomar decisiones informadas.
        </p>
        <div className="flex justify-center space-x-4">
          <Button 
            onClick={() => setActiveSection('mito')}
            className="bg-red-600 hover:bg-red-700"
          >
            <AlertTriangle className="mr-2" size={20} />
            Conoce el Mito
          </Button>
          <Button 
            onClick={() => setActiveSection('realidad')}
            className="bg-green-600 hover:bg-green-700"
          >
            <BookOpen className="mr-2" size={20} />
            Aprende la Realidad
          </Button>
        </div>
      </div>

      {/* Estadísticas de Alerta */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertTriangle className="mx-auto mb-4 text-red-600" size={48} />
          <h3 className="text-xl font-bold text-red-800 mb-2">Fraudes Documentados</h3>
          <p className="text-red-700">Miles de casos de estafas relacionadas con "Mercurio Rojo" a nivel mundial</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <Shield className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Convenio Internacional</h3>
          <p className="text-blue-700">137 países han ratificado el Convenio de Minamata sobre el Mercurio</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <BookOpen className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-xl font-bold text-green-800 mb-2">Educación Preventiva</h3>
          <p className="text-green-700">La información correcta es la mejor defensa contra el fraude</p>
        </div>
      </div>

      {/* Tabla Comparativa Rápida */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Comparación Rápida</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Característica</th>
                <th className="text-left p-3 text-red-600">"Mercurio Rojo" (Mito)</th>
                <th className="text-left p-3 text-green-600">Hg2Sb2O7 (Real)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.slice(0, 3).map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{row.caracteristica}</td>
                  <td className="p-3 text-red-700">{row.mercurioRojo}</td>
                  <td className="p-3 text-green-700">{row.hg2sb2o7}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          <Button onClick={() => setActiveSection('realidad')} variant="outline">
            Ver Comparación Completa
          </Button>
        </div>
      </div>
    </div>
  );

  const renderMito = () => (
    <div className="space-y-8">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <AlertTriangle className="text-red-500 mr-3" size={24} />
          <h1 className="text-3xl font-bold text-red-800">El Mito del "Mercurio Rojo"</h1>
        </div>
        <p className="text-red-700 text-lg">
          Una sustancia ficticia que ha causado millones en pérdidas por fraudes a nivel mundial.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Info className="mr-2 text-blue-600" size={20} />
            ¿Qué es el "Mercurio Rojo"?
          </h2>
          <p className="text-gray-700 mb-4">
            El "Mercurio Rojo" es una <strong>sustancia completamente ficticia</strong> que no existe 
            en la realidad química. Es un engaño que ha circulado durante décadas, especialmente 
            en el mercado negro.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No aparece en ninguna tabla periódica</li>
            <li>No tiene base científica real</li>
            <li>Se usa para estafas millonarias</li>
            <li>Promete propiedades imposibles</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <AlertTriangle className="mr-2 text-orange-600" size={20} />
            Origen del Mito
          </h2>
          <p className="text-gray-700 mb-4">
            El mito se originó durante la <strong>Guerra Fría</strong> como una supuesta 
            estratagema de inteligencia para identificar traficantes de materiales nucleares.
          </p>
          <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
            <p className="text-orange-800 text-sm">
              <strong>Dato histórico:</strong> Se difundieron rumores sobre una sustancia 
              secreta soviética crucial para la fabricación de armas nucleares pequeñas y potentes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <XCircle className="mr-2 text-red-600" size={20} />
          Señales de Alerta de Fraude
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-red-700">Ofertas Sospechosas:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Precios extremadamente altos</li>
              <li>Promesas de propiedades "milagrosas"</li>
              <li>Falta de documentación oficial</li>
              <li>Presión para comprar rápidamente</li>
              <li>Vendedores sin licencias válidas</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-red-700">Propiedades Falsas Comunes:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Uso en armas nucleares</li>
              <li>Capacidad de evadir radares</li>
              <li>Propiedades anti-gravitatorias</li>
              <li>Efectos curativos milagrosos</li>
              <li>Densidad imposible</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Shield className="mr-2 text-yellow-600" size={20} />
          Cómo Protegerte
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-700">1</span>
            </div>
            <h3 className="font-semibold mb-2">Edúcate</h3>
            <p className="text-sm text-gray-700">Aprende sobre la naturaleza ficticia del "Mercurio Rojo"</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-700">2</span>
            </div>
            <h3 className="font-semibold mb-2">Verifica</h3>
            <p className="text-sm text-gray-700">Consulta con autoridades y expertos antes de cualquier transacción</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl font-bold text-yellow-700">3</span>
            </div>
            <h3 className="font-semibold mb-2">Reporta</h3>
            <p className="text-sm text-gray-700">Informa a las autoridades sobre ofertas sospechosas</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRealidad = () => (
    <div className="space-y-8">
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <BookOpen className="text-green-500 mr-3" size={24} />
          <h1 className="text-3xl font-bold text-green-800">Hg2Sb2O7: La Realidad Química</h1>
        </div>
        <p className="text-green-700 text-lg">
          El compuesto real detrás de la fórmula química utilizada en el mito.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Tabla Comparativa Completa</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border">Característica</th>
                <th className="text-left p-3 border text-red-600">"Mercurio Rojo" (Mito)</th>
                <th className="text-left p-3 border text-green-600">Hg2Sb2O7 (Real)</th>
                <th className="text-center p-3 border">Estado</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border font-medium">{row.caracteristica}</td>
                  <td className="p-3 border text-red-700">{row.mercurioRojo}</td>
                  <td className="p-3 border text-green-700">{row.hg2sb2o7}</td>
                  <td className="p-3 border text-center">
                    {row.status === 'same' ? (
                      <CheckCircle className="text-green-500 mx-auto" size={20} />
                    ) : (
                      <XCircle className="text-red-500 mx-auto" size={20} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 text-blue-600" size={20} />
            Propiedades Reales del Hg2Sb2O7
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span><strong>Fórmula:</strong> Hg2Sb2O7 (óxido de mercurio de antimonio)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span><strong>Masa molar:</strong> ~756.7 g/mol</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span><strong>Estructura:</strong> Cristalina (pirocloro cúbico)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span><strong>Estado:</strong> Sólido a temperatura ambiente</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span><strong>Toxicidad:</strong> Alta (contiene mercurio)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Info className="mr-2 text-purple-600" size={20} />
            Usos Legítimos
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">Óxidos de Antimonio:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Retardantes de llama</li>
                <li>Industria del vidrio</li>
                <li>Catalizadores en PET</li>
                <li>Pigmentos especiales</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">Compuestos de Mercurio:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Catalizadores químicos</li>
                <li>Aplicaciones de laboratorio</li>
                <li>Investigación científica</li>
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
              <p className="text-red-800 text-sm">
                <strong>Nota:</strong> El uso de mercurio está muy restringido por el Convenio de Minamata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConvenio = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Shield className="text-blue-500 mr-3" size={24} />
          <h1 className="text-3xl font-bold text-blue-800">Convenio de Minamata sobre el Mercurio</h1>
        </div>
        <p className="text-blue-700 text-lg">
          El primer tratado internacional para proteger la salud humana y el medio ambiente del mercurio.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Objetivos Principales</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Proteger la salud humana y el medio ambiente</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Controlar emisiones de mercurio</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Regular el comercio internacional</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Eliminar gradualmente ciertos usos</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Medidas de Control</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Prohibición de nuevas minas de mercurio</span>
            </li>
            <li className="flex items-start">
              <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Eliminación gradual de minas existentes</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Control estricto del comercio</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span>Reducción de emisiones industriales</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Productos Regulados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-red-700">Prohibidos desde 2020:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Baterías (excepto botón)</li>
              <li>Interruptores y relés</li>
              <li>Lámparas fluorescentes compactas</li>
              <li>Lámparas fluorescentes lineales</li>
              <li>Lámparas de vapor de mercurio</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-orange-700">Regulados:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Termómetros</li>
              <li>Esfigmomanómetros</li>
              <li>Cosméticos blanqueadores</li>
              <li>Pesticidas y fungicidas</li>
              <li>Productos farmacéuticos</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-green-700">Excepciones:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Uso en investigación</li>
              <li>Calibración de instrumentos</li>
              <li>Medicina tradicional regulada</li>
              <li>Vacunas (como conservante)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Download className="mr-2 text-green-600" size={20} />
          Descargar Convenio Completo
        </h2>
        <p className="text-gray-700 mb-4">
          Accede al texto completo del Convenio de Minamata sobre el Mercurio en español.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">
          <Download className="mr-2" size={16} />
          Descargar PDF (630 KB)
        </Button>
      </div>
    </div>
  );

  const renderMexico = () => (
    <div className="space-y-8">
      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Users className="text-green-500 mr-3" size={24} />
          <h1 className="text-3xl font-bold text-green-800">Situación en México</h1>
        </div>
        <p className="text-green-700 text-lg">
          Regulaciones, síntesis y transporte de compuestos de mercurio en territorio mexicano.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <XCircle className="mr-2 text-red-600" size={20} />
            Síntesis de Hg2Sb2O7
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
              <p className="text-red-800 font-semibold mb-2">Hallazgo Principal:</p>
              <p className="text-red-700 text-sm">
                No hay evidencia de síntesis de Hg2Sb2O7 a escala industrial en México.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <AlertTriangle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Múltiples sitios fraudulentos ofrecen "Mercurio Rojo"</span>
              </li>
              <li className="flex items-start">
                <Info className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Laboratorios de análisis pueden detectar mercurio y antimonio</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span>Si se necesitara, se importaría bajo regulaciones estrictas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Shield className="mr-2 text-blue-600" size={20} />
            Autoridades Regulatorias
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">SEMARNAT</h3>
              <p className="text-gray-700 text-sm">Gestión de residuos peligrosos e importación/exportación</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">COFEPRIS</h3>
              <p className="text-gray-700 text-sm">Sustancias químicas que representan riesgo sanitario</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">SCT</h3>
              <p className="text-gray-700 text-sm">Transporte de materiales peligrosos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Requisitos para Importación/Transporte</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-purple-700">Documentación Requerida:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Licencias de operación como manejador de materiales peligrosos</li>
              <li>Registro ante autoridades aduaneras</li>
              <li>Notificaciones previas a SEMARNAT y COFEPRIS</li>
              <li>Especificación detallada del uso final</li>
              <li>Certificados de origen y calidad</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-purple-700">Cumplimiento Operativo:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Normas de transporte de materiales peligrosos</li>
              <li>Embalajes y etiquetado adecuados</li>
              <li>Vehículos autorizados para carga peligrosa</li>
              <li>Seguro de responsabilidad civil</li>
              <li>Personal capacitado y certificado</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-yellow-600" size={20} />
          Advertencia Importante
        </h2>
        <div className="space-y-3">
          <p className="text-yellow-800">
            <strong>No existe una "autorización general"</strong> para importar "Mercurio Rojo" o Hg2Sb2O7. 
            Cada operación requiere permisos específicos.
          </p>
          <p className="text-yellow-800">
            Cualquier empresa que afirme tener autorización genérica debe ser vista con extrema cautela.
          </p>
        </div>
      </div>
    </div>
  );

  const renderRecursos = () => (
    <div className="space-y-8">
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <FileText className="text-purple-500 mr-3" size={24} />
          <h1 className="text-3xl font-bold text-purple-800">Recursos Educativos</h1>
        </div>
        <p className="text-purple-700 text-lg">
          Documentos, enlaces y herramientas para profundizar en el tema.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Download className="mr-2 text-blue-600" size={20} />
            Documentos Descargables
          </h2>
          <div className="space-y-3">
            <div className="border rounded-lg p-3 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Convenio de Minamata (PDF)</h3>
                  <p className="text-sm text-gray-600">Texto completo en español - 630 KB</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>
            </div>
            <div className="border rounded-lg p-3 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Tabla Comparativa Completa</h3>
                  <p className="text-sm text-gray-600">Hg2Sb2O7 vs "Mercurio Rojo" - PDF</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>
            </div>
            <div className="border rounded-lg p-3 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Informe de Investigación</h3>
                  <p className="text-sm text-gray-600">Síntesis y transporte en México - PDF</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <ExternalLink className="mr-2 text-green-600" size={20} />
            Enlaces Útiles
          </h2>
          <div className="space-y-3">
            <a href="https://minamataconvention.org/es" target="_blank" rel="noopener noreferrer" 
               className="block border rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600">Convenio de Minamata Oficial</h3>
              <p className="text-sm text-gray-600">Sitio web oficial del convenio</p>
            </a>
            <a href="https://www.gob.mx/cofepris" target="_blank" rel="noopener noreferrer"
               className="block border rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600">COFEPRIS</h3>
              <p className="text-sm text-gray-600">Comisión Federal para la Protección contra Riesgos Sanitarios</p>
            </a>
            <a href="https://www.gob.mx/semarnat" target="_blank" rel="noopener noreferrer"
               className="block border rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-blue-600">SEMARNAT</h3>
              <p className="text-sm text-gray-600">Secretaría de Medio Ambiente y Recursos Naturales</p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-semibold">{faq.question}</span>
                {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedFaq === index && (
                <div className="p-4 border-t bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Users className="mr-2 text-blue-600" size={20} />
          Contacto y Soporte
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">EMPRENDECONECTA</h3>
            <p className="text-gray-700 text-sm mb-2">
              Para consultas sobre este contenido educativo o servicios de consultoría.
            </p>
            <p className="text-blue-600 font-medium">Las conexiones que impulsan tu negocio</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Reportar Fraudes</h3>
            <p className="text-gray-700 text-sm mb-2">
              Si encuentras ofertas sospechosas de "Mercurio Rojo", repórtalas a:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• COFEPRIS: Riesgos sanitarios</li>
              <li>• SEMARNAT: Sustancias peligrosas</li>
              <li>• FGR: Actividades ilícitas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome();
      case 'mito': return renderMito();
      case 'realidad': return renderRealidad();
      case 'convenio': return renderConvenio();
      case 'mexico': return renderMexico();
      case 'recursos': return renderRecursos();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src={logoEmprendeConecta} 
                alt="EMPRENDECONECTA" 
                className="h-10 w-auto rounded"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Centro Educativo sobre Mercurio</h1>
                <p className="text-sm text-gray-600">EMPRENDECONECTA</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center space-x-3 transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.icon}
                      <span className="text-sm">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}

export default App;

