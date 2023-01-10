const opentelemetry = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const zipkinExporter = new ZipkinExporter({
  serviceName: 'my-service',
  url: 'http://localhost:9411/api/v2/spans',
});

const jaegerExporter = new JaegerExporter({
  serviceName: 'my-service',
  host: 'localhost',
  port: 6832,
});

const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'my-service',
  }),
  traceExporter: jaegerExporter,
  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-http': {
        enabled: true,
        applyCustomAttributesOnSpan: (span, request) => {
          span.setAttribute('http.request.headers', request.headers);
          span.setAttribute('http.request.method', request.method);
          span.setAttribute('http.request.url', request.url);
        }
      }
    })
  ]
});

sdk.start().then(() => {
  console.log('tracing initialized');
});

// sudo docker run -d -p 5775:5775/udp -p 6831:6831/udp   
// -p 6832:6832/udp -p 5778:5778 -p 16686:16686 -p 14250:14250   
// -p 14268:14268 -p 14269:14269 -p 9411:9411 jaegertracing/all-in-one

// sudo docker run -d -p 9411:9411 openzipkin/zipkin
