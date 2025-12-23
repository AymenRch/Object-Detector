import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./objet.css"

const Objet: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const runCoco = async () => {
      await tf.setBackend("webgl");
      const net = await cocossd.load();
      console.log("COCO-SSD model loaded");

      setInterval(() => {
        detect(net);
      }, 100);
    };

    runCoco();
  }, []);

  const detect = async (net: cocossd.ObjectDetection) => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4 &&
      canvasRef.current
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      video.width = videoWidth;
      video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const predictions = await net.detect(video);
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) drawRect(predictions, ctx);
    }
  };

  const drawRect = (
    detections: cocossd.DetectedObject[],
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    detections.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;

      ctx.strokeStyle = "green";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "green";
      ctx.font = "14px Arial";
      ctx.fillText(
        `${prediction.class} ${Math.round(prediction.score * 100)}%`,
        x,
        y > 10 ? y - 5 : 10
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{ position: "absolute",width: 640, height: 480 }}
        />
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", width: 640, height: 480 }}
        />
      </header>
    </div>
  );
};

export default Objet;
