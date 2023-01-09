'use strict';

const { LogLevel } = require('@opentelemetry/core');
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');
const { NodeTracerProvider } = require('@opentelemetry/node');
const { SimpleSpanProcessor } = require('@opentelemetry/tracing');

const provider = new NodeTracerProvider({
    logLevel: LogLevel.ERROR,
});

provider.addSpanProcessor(
    new SimpleSpanProcessor(
        new ZipkinExporter({
            serviceName: 'my-service',
        })
    )
);
