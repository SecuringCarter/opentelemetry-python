window.BENCHMARK_DATA = {
  "lastUpdate": 1696432145843,
  "repoUrl": "https://github.com/SecuringCarter/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.10 - SDK": [
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
          "id": "c7a90adfd87d6e690f703a35715c25ed82ae13d6",
          "message": "Add more Python and OS versions",
          "timestamp": "2023-09-28T07:53:14Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/c7a90adfd87d6e690f703a35715c25ed82ae13d6"
        },
        "date": 1696432144526,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 605093.8411843592,
            "unit": "iter/sec",
            "range": "stddev: 2.1181554472456258e-7",
            "extra": "mean: 1.6526362225777824 usec\nrounds: 28821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 582767.2413103161,
            "unit": "iter/sec",
            "range": "stddev: 1.514188507753703e-7",
            "extra": "mean: 1.7159509476743438 usec\nrounds: 87482"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 534858.2511499429,
            "unit": "iter/sec",
            "range": "stddev: 2.6207200703616867e-7",
            "extra": "mean: 1.8696542454940246 usec\nrounds: 100463"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 492567.01806863374,
            "unit": "iter/sec",
            "range": "stddev: 2.667442502250537e-7",
            "extra": "mean: 2.0301805913051636 usec\nrounds: 92405"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 428496.6430616007,
            "unit": "iter/sec",
            "range": "stddev: 2.920710804593138e-7",
            "extra": "mean: 2.3337405699494362 usec\nrounds: 93785"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 616323.6364132061,
            "unit": "iter/sec",
            "range": "stddev: 2.402067638026349e-7",
            "extra": "mean: 1.6225241754797202 usec\nrounds: 61717"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 590773.1924726429,
            "unit": "iter/sec",
            "range": "stddev: 2.3593008861511313e-7",
            "extra": "mean: 1.6926969820931868 usec\nrounds: 100051"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 539695.8679210909,
            "unit": "iter/sec",
            "range": "stddev: 2.411414362976996e-7",
            "extra": "mean: 1.8528954165463616 usec\nrounds: 100242"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 493945.86226364755,
            "unit": "iter/sec",
            "range": "stddev: 2.457830847992475e-7",
            "extra": "mean: 2.0245133655279854 usec\nrounds: 94762"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 434170.55573856796,
            "unit": "iter/sec",
            "range": "stddev: 2.4388365942657127e-7",
            "extra": "mean: 2.303242324433768 usec\nrounds: 93626"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 617890.791155599,
            "unit": "iter/sec",
            "range": "stddev: 1.7729248870606937e-7",
            "extra": "mean: 1.6184089718019072 usec\nrounds: 294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 598492.2081495466,
            "unit": "iter/sec",
            "range": "stddev: 2.2424764199031503e-7",
            "extra": "mean: 1.6708655290464995 usec\nrounds: 91297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 548260.2883661126,
            "unit": "iter/sec",
            "range": "stddev: 2.443530113588245e-7",
            "extra": "mean: 1.8239511801595751 usec\nrounds: 93867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 500171.43971669616,
            "unit": "iter/sec",
            "range": "stddev: 2.658337141157473e-7",
            "extra": "mean: 1.9993144761852326 usec\nrounds: 95465"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 438767.81236510974,
            "unit": "iter/sec",
            "range": "stddev: 2.3743690392785106e-7",
            "extra": "mean: 2.2791097519429586 usec\nrounds: 94234"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 511621.3299255927,
            "unit": "iter/sec",
            "range": "stddev: 1.1431999298609999e-7",
            "extra": "mean: 1.9545705808345288 usec\nrounds: 2990"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 514740.49653445854,
            "unit": "iter/sec",
            "range": "stddev: 2.508384889959743e-7",
            "extra": "mean: 1.9427264937043018 usec\nrounds: 159641"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 511128.7977949058,
            "unit": "iter/sec",
            "range": "stddev: 2.9489601901214215e-7",
            "extra": "mean: 1.9564540372488606 usec\nrounds: 162886"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 512336.5968086149,
            "unit": "iter/sec",
            "range": "stddev: 2.6048720278600606e-7",
            "extra": "mean: 1.9518418286514745 usec\nrounds: 148790"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 513754.1946368798,
            "unit": "iter/sec",
            "range": "stddev: 2.8036215233675317e-7",
            "extra": "mean: 1.9464561271500618 usec\nrounds: 163743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 516354.85971619247,
            "unit": "iter/sec",
            "range": "stddev: 1.8282114609215323e-7",
            "extra": "mean: 1.9366526356499028 usec\nrounds: 16155"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 514385.2399361058,
            "unit": "iter/sec",
            "range": "stddev: 2.811123478649722e-7",
            "extra": "mean: 1.9440682242830583 usec\nrounds: 163831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 514560.35458491876,
            "unit": "iter/sec",
            "range": "stddev: 1.8840928300412142e-7",
            "extra": "mean: 1.9434066209913734 usec\nrounds: 52528"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 517376.43097121594,
            "unit": "iter/sec",
            "range": "stddev: 2.472450355964715e-7",
            "extra": "mean: 1.9328286720034886 usec\nrounds: 170530"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511658.7471402323,
            "unit": "iter/sec",
            "range": "stddev: 2.647384418715304e-7",
            "extra": "mean: 1.954427644576017 usec\nrounds: 150363"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 505337.37854032917,
            "unit": "iter/sec",
            "range": "stddev: 1.6182199770472391e-7",
            "extra": "mean: 1.978875979624756 usec\nrounds: 20485"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 504737.8676021577,
            "unit": "iter/sec",
            "range": "stddev: 2.7113905464019866e-7",
            "extra": "mean: 1.9812264230355225 usec\nrounds: 152326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 503154.76062561735,
            "unit": "iter/sec",
            "range": "stddev: 2.7745501612828645e-7",
            "extra": "mean: 1.9874600783993586 usec\nrounds: 170071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 484208.36120215635,
            "unit": "iter/sec",
            "range": "stddev: 0.000026821146645091977",
            "extra": "mean: 2.0652266258213197 usec\nrounds: 163481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 504833.6631049331,
            "unit": "iter/sec",
            "range": "stddev: 2.421464994974719e-7",
            "extra": "mean: 1.9808504723112001 usec\nrounds: 53211"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 503916.7369285395,
            "unit": "iter/sec",
            "range": "stddev: 4.24865924953968e-7",
            "extra": "mean: 1.9844548250077476 usec\nrounds: 24120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 505287.81670043524,
            "unit": "iter/sec",
            "range": "stddev: 2.908148109185242e-7",
            "extra": "mean: 1.9790700803555286 usec\nrounds: 153568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 502800.0020419159,
            "unit": "iter/sec",
            "range": "stddev: 2.408047372161534e-7",
            "extra": "mean: 1.9888623626469975 usec\nrounds: 158253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 502693.5885223241,
            "unit": "iter/sec",
            "range": "stddev: 2.71796361358201e-7",
            "extra": "mean: 1.9892833782493946 usec\nrounds: 161187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 505405.90119348484,
            "unit": "iter/sec",
            "range": "stddev: 2.6248400433835046e-7",
            "extra": "mean: 1.9786076847115588 usec\nrounds: 158850"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 493609.95062164136,
            "unit": "iter/sec",
            "range": "stddev: 2.2102741110516385e-7",
            "extra": "mean: 2.025891088177259 usec\nrounds: 23726"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 479042.5035381317,
            "unit": "iter/sec",
            "range": "stddev: 4.463153896199195e-7",
            "extra": "mean: 2.0874974404445514 usec\nrounds: 151168"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 489540.7005480414,
            "unit": "iter/sec",
            "range": "stddev: 2.4166817239635425e-7",
            "extra": "mean: 2.042731071962962 usec\nrounds: 139357"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 486518.10250673816,
            "unit": "iter/sec",
            "range": "stddev: 3.2719312231278995e-7",
            "extra": "mean: 2.055421976793043 usec\nrounds: 146697"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 485827.40305386944,
            "unit": "iter/sec",
            "range": "stddev: 2.8317052540920036e-7",
            "extra": "mean: 2.0583441644379996 usec\nrounds: 157210"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 53636.887662564186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027843938342951404",
            "extra": "mean: 18.64388564622009 usec\nrounds: 91"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 39892.69038490947,
            "unit": "iter/sec",
            "range": "stddev: 0.000001030601026874297",
            "extra": "mean: 25.067248920826813 usec\nrounds: 17184"
          }
        ]
      }
    ]
  }
}