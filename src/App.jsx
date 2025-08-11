import React, { useState } from "react";

export default function App() {
  const chavePix = "casamento.fulano@gmail.com"; // Substitua pela sua chave PIX
  const nomeRecebedor = "Fulano e Fulana";
  const cidade = "Sao Paulo";

  const [copiado, setCopiado] = useState(false);

  const copiarChave = () => {
    navigator.clipboard.writeText(chavePix).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
      window.location.href = "intent://pix#Intent;scheme=br.gov.bcb.pix;end";
    });
  };

  const doar = (valor) => {
    const descricao = `Presente Casamento - R$${valor}`;
    const url = `https://gerarpix.com.br/api/v1?nome=${encodeURIComponent(
      nomeRecebedor
    )}&cidade=${encodeURIComponent(
      cidade
    )}&valor=${valor}&chave=${encodeURIComponent(
      chavePix
    )}&info=${encodeURIComponent(descricao)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">
        Casamento Fulano & Fulana
      </h1>
      <p className="mb-1">
        <strong>Data:</strong> 12 de Dezembro de 2025
      </p>
      <p className="mb-1">
        <strong>Local:</strong> Espaço das Flores - São Paulo, SP
      </p>
      <p className="mb-6">
        <strong>Horário:</strong> 17h
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Contribua com nossa vaquinha
      </h2>
      <img
        src="/qr-pix.png"
        alt="QR Code Pix"
        className="w-48 border rounded shadow mb-2"
      />
      <p className="text-sm break-all">{chavePix}</p>
      <button
        onClick={copiarChave}
        className="mt-2 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
      >
        {copiado ? "✅ Chave copiada!" : "📋 Copiar chave e abrir banco"}
      </button>

      <h2 className="text-xl font-semibold mt-8 mb-4">Lista de Presentes</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => doar(50)}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
        >
          💐 Buquê - R$ 50
        </button>
        <button
          onClick={() => doar(100)}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
        >
          🍽 Jantar - R$ 100
        </button>
        <button
          onClick={() => doar(200)}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
        >
          🏖 Lua de Mel - R$ 200
        </button>
        <button
          onClick={() => doar(500)}
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
        >
          🏠 Ajuda no Lar - R$ 500
        </button>
      </div>
    </div>
  );
}
