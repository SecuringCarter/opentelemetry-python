window.BENCHMARK_DATA = {
  "lastUpdate": 1697146102575,
  "repoUrl": "https://github.com/SecuringCarter/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.11 - SDK": [
      {
        "commit": {
          "author": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "committer": {
            "name": "Diego Hurtado",
            "username": "ocelotl",
            "email": "ocelotl@users.noreply.github.com"
          },
          "id": "4ef1a58bfc00cd9b8c76ffbb5d604eb1953019b3",
          "message": "Leave only one benchmark",
          "timestamp": "2023-10-12T20:13:15Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/4ef1a58bfc00cd9b8c76ffbb5d604eb1953019b3"
        },
        "date": 1697146101205,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmarks.py::test_long",
            "value": 0.9997976786097353,
            "unit": "iter/sec",
            "range": "stddev: 0.000012481558197105076",
            "extra": "mean: 1.0002023623324932 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}