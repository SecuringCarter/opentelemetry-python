window.BENCHMARK_DATA = {
  "lastUpdate": 1696432622016,
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
      },
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
        "date": 1696432249871,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 610195.7259825063,
            "unit": "iter/sec",
            "range": "stddev: 1.5704869737409565e-7",
            "extra": "mean: 1.6388184273002742 usec\nrounds: 27444"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 582114.3093341966,
            "unit": "iter/sec",
            "range": "stddev: 2.4602290638779506e-7",
            "extra": "mean: 1.7178756542572668 usec\nrounds: 81828"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 536282.8358376479,
            "unit": "iter/sec",
            "range": "stddev: 2.4216768461555654e-7",
            "extra": "mean: 1.864687685627768 usec\nrounds: 94312"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 489089.56105245114,
            "unit": "iter/sec",
            "range": "stddev: 2.730839904862696e-7",
            "extra": "mean: 2.044615300821678 usec\nrounds: 86813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 421581.5442992554,
            "unit": "iter/sec",
            "range": "stddev: 2.6484867297118574e-7",
            "extra": "mean: 2.3720203446338726 usec\nrounds: 92616"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 601689.381815578,
            "unit": "iter/sec",
            "range": "stddev: 1.903481271141596e-7",
            "extra": "mean: 1.6619871153161003 usec\nrounds: 56415"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 573291.0897619034,
            "unit": "iter/sec",
            "range": "stddev: 2.2302090190441867e-7",
            "extra": "mean: 1.7443145687390944 usec\nrounds: 104384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 529025.2062040134,
            "unit": "iter/sec",
            "range": "stddev: 2.373178170454648e-7",
            "extra": "mean: 1.8902690992276834 usec\nrounds: 90524"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 482709.3482481776,
            "unit": "iter/sec",
            "range": "stddev: 2.2391118681862668e-7",
            "extra": "mean: 2.071640012005455 usec\nrounds: 96534"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 416619.49474850245,
            "unit": "iter/sec",
            "range": "stddev: 2.7087602424169183e-7",
            "extra": "mean: 2.4002717410131336 usec\nrounds: 91550"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 606256.6889268003,
            "unit": "iter/sec",
            "range": "stddev: 1.7843461551576623e-7",
            "extra": "mean: 1.6494663370563496 usec\nrounds: 302"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 588732.1987409414,
            "unit": "iter/sec",
            "range": "stddev: 2.377350518308347e-7",
            "extra": "mean: 1.6985651577042893 usec\nrounds: 89655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 542452.5071616158,
            "unit": "iter/sec",
            "range": "stddev: 2.892865252543775e-7",
            "extra": "mean: 1.8434793586492995 usec\nrounds: 92187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 493135.3835352974,
            "unit": "iter/sec",
            "range": "stddev: 2.23209489581639e-7",
            "extra": "mean: 2.0278406972766385 usec\nrounds: 90911"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 429278.89991612243,
            "unit": "iter/sec",
            "range": "stddev: 2.987681070808514e-7",
            "extra": "mean: 2.3294878928253677 usec\nrounds: 87222"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 506903.25793915155,
            "unit": "iter/sec",
            "range": "stddev: 1.2370024540229167e-7",
            "extra": "mean: 1.972763016094167 usec\nrounds: 2977"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 508332.98673651216,
            "unit": "iter/sec",
            "range": "stddev: 2.770155158432251e-7",
            "extra": "mean: 1.9672144560595612 usec\nrounds: 154296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 505388.39994486974,
            "unit": "iter/sec",
            "range": "stddev: 2.5389000394826394e-7",
            "extra": "mean: 1.9786762025188644 usec\nrounds: 152326"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 505920.90340056637,
            "unit": "iter/sec",
            "range": "stddev: 2.6920344164557367e-7",
            "extra": "mean: 1.976593560927138 usec\nrounds: 167983"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 500514.1880284054,
            "unit": "iter/sec",
            "range": "stddev: 2.7420517168956425e-7",
            "extra": "mean: 1.9979453608281084 usec\nrounds: 170734"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 509915.7729367477,
            "unit": "iter/sec",
            "range": "stddev: 1.577318096405615e-7",
            "extra": "mean: 1.961108192909429 usec\nrounds: 20843"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 506091.1920413217,
            "unit": "iter/sec",
            "range": "stddev: 2.5728702066952913e-7",
            "extra": "mean: 1.9759284803327526 usec\nrounds: 165625"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 503738.7235063653,
            "unit": "iter/sec",
            "range": "stddev: 2.5027505734999995e-7",
            "extra": "mean: 1.9851561004469092 usec\nrounds: 161891"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 510674.25200096716,
            "unit": "iter/sec",
            "range": "stddev: 2.4614672338506376e-7",
            "extra": "mean: 1.9581954564611694 usec\nrounds: 159914"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511315.8589904967,
            "unit": "iter/sec",
            "range": "stddev: 2.3124908112905133e-7",
            "extra": "mean: 1.955738282740387 usec\nrounds: 172213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 502651.28426113393,
            "unit": "iter/sec",
            "range": "stddev: 4.207894107737877e-7",
            "extra": "mean: 1.98945080080704 usec\nrounds: 26410"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 498520.4141201363,
            "unit": "iter/sec",
            "range": "stddev: 2.9447181863474266e-7",
            "extra": "mean: 2.0059359088934205 usec\nrounds: 152857"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 497192.4470277923,
            "unit": "iter/sec",
            "range": "stddev: 2.8057241302556763e-7",
            "extra": "mean: 2.0112936267998083 usec\nrounds: 163084"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 481456.0495691548,
            "unit": "iter/sec",
            "range": "stddev: 0.00002771118797814761",
            "extra": "mean: 2.0770327860557147 usec\nrounds: 169001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 501785.8703415973,
            "unit": "iter/sec",
            "range": "stddev: 2.608558516588963e-7",
            "extra": "mean: 1.9928819424892072 usec\nrounds: 159926"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 503814.48141198856,
            "unit": "iter/sec",
            "range": "stddev: 2.0767667766976383e-7",
            "extra": "mean: 1.984857595195366 usec\nrounds: 27053"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 491024.9567162926,
            "unit": "iter/sec",
            "range": "stddev: 3.094971765360312e-7",
            "extra": "mean: 2.0365563630155483 usec\nrounds: 160861"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 495983.25942539645,
            "unit": "iter/sec",
            "range": "stddev: 2.7482412338472204e-7",
            "extra": "mean: 2.0161970812452705 usec\nrounds: 123518"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 493428.75191092084,
            "unit": "iter/sec",
            "range": "stddev: 3.3122709108722646e-7",
            "extra": "mean: 2.0266350433112397 usec\nrounds: 161005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 494961.3247776022,
            "unit": "iter/sec",
            "range": "stddev: 2.414678288803127e-7",
            "extra": "mean: 2.0203598744797353 usec\nrounds: 149797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 485452.7833471326,
            "unit": "iter/sec",
            "range": "stddev: 3.243546024479434e-7",
            "extra": "mean: 2.059932570795315 usec\nrounds: 21121"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 488974.05697029026,
            "unit": "iter/sec",
            "range": "stddev: 2.684921046768266e-7",
            "extra": "mean: 2.045098274121237 usec\nrounds: 154507"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 480995.4584718904,
            "unit": "iter/sec",
            "range": "stddev: 2.825873701905258e-7",
            "extra": "mean: 2.0790217088056777 usec\nrounds: 152716"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 480819.3812675944,
            "unit": "iter/sec",
            "range": "stddev: 2.8028746560311313e-7",
            "extra": "mean: 2.079783051514435 usec\nrounds: 149183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 481451.1584994554,
            "unit": "iter/sec",
            "range": "stddev: 3.0051939606939945e-7",
            "extra": "mean: 2.0770538866636272 usec\nrounds: 157279"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 54073.243320760994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012820597298564552",
            "extra": "mean: 18.493434804123503 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 40582.69275428129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011226695959867171",
            "extra": "mean: 24.64104602557465 usec\nrounds: 18853"
          }
        ]
      }
    ],
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
          "id": "c7a90adfd87d6e690f703a35715c25ed82ae13d6",
          "message": "Add more Python and OS versions",
          "timestamp": "2023-09-28T07:53:14Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/c7a90adfd87d6e690f703a35715c25ed82ae13d6"
        },
        "date": 1696432200140,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 929198.4124606259,
            "unit": "iter/sec",
            "range": "stddev: 1.915724676824186e-7",
            "extra": "mean: 1.0761964146622713 usec\nrounds: 24728"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 875777.324434704,
            "unit": "iter/sec",
            "range": "stddev: 1.9805393150306872e-7",
            "extra": "mean: 1.1418427631081667 usec\nrounds: 91527"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 770809.0282171104,
            "unit": "iter/sec",
            "range": "stddev: 1.9098980232308657e-7",
            "extra": "mean: 1.29733820361836 usec\nrounds: 119731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 682218.8348968416,
            "unit": "iter/sec",
            "range": "stddev: 2.602660751826783e-7",
            "extra": "mean: 1.4658053235238078 usec\nrounds: 89390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 569491.387419647,
            "unit": "iter/sec",
            "range": "stddev: 2.5286996255567673e-7",
            "extra": "mean: 1.7559528064699594 usec\nrounds: 115874"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 911367.1788023921,
            "unit": "iter/sec",
            "range": "stddev: 1.4120665439427514e-7",
            "extra": "mean: 1.0972525928726975 usec\nrounds: 56539"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 882680.5090166925,
            "unit": "iter/sec",
            "range": "stddev: 2.0901717738641342e-7",
            "extra": "mean: 1.1329127467808275 usec\nrounds: 142124"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 784110.107212703,
            "unit": "iter/sec",
            "range": "stddev: 2.013653870725066e-7",
            "extra": "mean: 1.2753310929184762 usec\nrounds: 120510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 667835.4047529879,
            "unit": "iter/sec",
            "range": "stddev: 3.5277812333608635e-7",
            "extra": "mean: 1.4973749413148734 usec\nrounds: 114539"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 565480.4419060125,
            "unit": "iter/sec",
            "range": "stddev: 2.821686440941649e-7",
            "extra": "mean: 1.768407757179705 usec\nrounds: 108094"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 941220.6164980457,
            "unit": "iter/sec",
            "range": "stddev: 1.371621601645456e-7",
            "extra": "mean: 1.0624501657439804 usec\nrounds: 34348"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 890936.4010008525,
            "unit": "iter/sec",
            "range": "stddev: 1.7876178524521213e-7",
            "extra": "mean: 1.1224145728882877 usec\nrounds: 133509"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 795869.2501934234,
            "unit": "iter/sec",
            "range": "stddev: 2.548249760337896e-7",
            "extra": "mean: 1.2564877958998488 usec\nrounds: 49391"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 686439.0039078004,
            "unit": "iter/sec",
            "range": "stddev: 1.9394984130511378e-7",
            "extra": "mean: 1.456793676214698 usec\nrounds: 128523"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 573887.8898952757,
            "unit": "iter/sec",
            "range": "stddev: 2.9404887461797613e-7",
            "extra": "mean: 1.7425006131118783 usec\nrounds: 121637"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 743350.3809917589,
            "unit": "iter/sec",
            "range": "stddev: 1.1645072551715118e-7",
            "extra": "mean: 1.3452606275197247 usec\nrounds: 3877"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 795634.8759444696,
            "unit": "iter/sec",
            "range": "stddev: 1.0889244854836119e-7",
            "extra": "mean: 1.2568579259587331 usec\nrounds: 189440"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 736857.3370016441,
            "unit": "iter/sec",
            "range": "stddev: 2.331762234597951e-7",
            "extra": "mean: 1.3571148033472982 usec\nrounds: 156363"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 786862.4627281455,
            "unit": "iter/sec",
            "range": "stddev: 1.138011371881089e-7",
            "extra": "mean: 1.2708701296194527 usec\nrounds: 87010"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 793228.2657636267,
            "unit": "iter/sec",
            "range": "stddev: 1.0290516025045485e-7",
            "extra": "mean: 1.2606711625906548 usec\nrounds: 185769"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 754919.6323676772,
            "unit": "iter/sec",
            "range": "stddev: 8.474017619998991e-8",
            "extra": "mean: 1.3246443159302534 usec\nrounds: 16759"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 800404.8215421445,
            "unit": "iter/sec",
            "range": "stddev: 1.0906381581219424e-7",
            "extra": "mean: 1.249367786257577 usec\nrounds: 190837"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 753987.1148593919,
            "unit": "iter/sec",
            "range": "stddev: 2.749549133593105e-7",
            "extra": "mean: 1.3262826118540316 usec\nrounds: 195457"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 800133.3884189667,
            "unit": "iter/sec",
            "range": "stddev: 1.4714188854229294e-7",
            "extra": "mean: 1.24979161534049 usec\nrounds: 198566"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 803393.28338606,
            "unit": "iter/sec",
            "range": "stddev: 1.1142917390733918e-7",
            "extra": "mean: 1.244720388730787 usec\nrounds: 193572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 729842.9066992388,
            "unit": "iter/sec",
            "range": "stddev: 4.788964902631121e-7",
            "extra": "mean: 1.3701578666052452 usec\nrounds: 26281"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 788465.3912630905,
            "unit": "iter/sec",
            "range": "stddev: 1.3045451524970799e-7",
            "extra": "mean: 1.2682864854702618 usec\nrounds: 55477"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 782343.45549363,
            "unit": "iter/sec",
            "range": "stddev: 1.6018964551384477e-7",
            "extra": "mean: 1.278210986463786 usec\nrounds: 183719"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 784787.1135500827,
            "unit": "iter/sec",
            "range": "stddev: 1.1981417416270842e-7",
            "extra": "mean: 1.2742309127329765 usec\nrounds: 184366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 785123.8605041036,
            "unit": "iter/sec",
            "range": "stddev: 1.0542607184928211e-7",
            "extra": "mean: 1.273684383197743 usec\nrounds: 193154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 739510.5870607184,
            "unit": "iter/sec",
            "range": "stddev: 1.6093802948366943e-7",
            "extra": "mean: 1.352245684506872 usec\nrounds: 27797"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 780004.9376139637,
            "unit": "iter/sec",
            "range": "stddev: 1.1666899504317775e-7",
            "extra": "mean: 1.2820431663663585 usec\nrounds: 190448"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 785813.9769223435,
            "unit": "iter/sec",
            "range": "stddev: 1.026252044632221e-7",
            "extra": "mean: 1.2725658099344586 usec\nrounds: 187800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 782617.6649339838,
            "unit": "iter/sec",
            "range": "stddev: 1.0863104576482604e-7",
            "extra": "mean: 1.2777631336552477 usec\nrounds: 192117"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 784642.656479694,
            "unit": "iter/sec",
            "range": "stddev: 1.1850830810432485e-7",
            "extra": "mean: 1.2744655057201562 usec\nrounds: 191826"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 692495.6047184311,
            "unit": "iter/sec",
            "range": "stddev: 2.9537667360960415e-7",
            "extra": "mean: 1.444052486667551 usec\nrounds: 23830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 707469.0298099272,
            "unit": "iter/sec",
            "range": "stddev: 3.473981892252881e-7",
            "extra": "mean: 1.4134894360939954 usec\nrounds: 176574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 741586.2526011707,
            "unit": "iter/sec",
            "range": "stddev: 1.1117578775430723e-7",
            "extra": "mean: 1.3484608115272139 usec\nrounds: 185144"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 694654.3008757026,
            "unit": "iter/sec",
            "range": "stddev: 2.987474468045983e-7",
            "extra": "mean: 1.4395649731663205 usec\nrounds: 189223"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 694578.642656847,
            "unit": "iter/sec",
            "range": "stddev: 2.759111781262647e-7",
            "extra": "mean: 1.4397217803514364 usec\nrounds: 185432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 67249.667992359,
            "unit": "iter/sec",
            "range": "stddev: 0.000004952892707946476",
            "extra": "mean: 14.869961887598038 usec\nrounds: 38"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57610.920584317086,
            "unit": "iter/sec",
            "range": "stddev: 8.92000277299496e-7",
            "extra": "mean: 17.357820181617114 usec\nrounds: 19203"
          }
        ]
      },
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
        "date": 1696432354500,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 872787.9396010089,
            "unit": "iter/sec",
            "range": "stddev: 2.8845665410572016e-7",
            "extra": "mean: 1.145753687266973 usec\nrounds: 25331"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 828288.1068666008,
            "unit": "iter/sec",
            "range": "stddev: 2.6953454365922903e-7",
            "extra": "mean: 1.2073093790794394 usec\nrounds: 88747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 750124.7537083802,
            "unit": "iter/sec",
            "range": "stddev: 2.2633171972541445e-7",
            "extra": "mean: 1.3331115858479745 usec\nrounds: 110264"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 660271.8589595213,
            "unit": "iter/sec",
            "range": "stddev: 2.6267626999796626e-7",
            "extra": "mean: 1.5145276698235086 usec\nrounds: 91919"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 559042.8777868664,
            "unit": "iter/sec",
            "range": "stddev: 3.015424482575203e-7",
            "extra": "mean: 1.7887715589165367 usec\nrounds: 116998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 875564.1787883755,
            "unit": "iter/sec",
            "range": "stddev: 2.4777144701466406e-7",
            "extra": "mean: 1.1421207310968586 usec\nrounds: 53714"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 831495.9501248855,
            "unit": "iter/sec",
            "range": "stddev: 2.4679475278183765e-7",
            "extra": "mean: 1.2026516783994032 usec\nrounds: 137475"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 753015.6493668277,
            "unit": "iter/sec",
            "range": "stddev: 3.0998514093240337e-7",
            "extra": "mean: 1.327993649057425 usec\nrounds: 127895"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 660756.3344300311,
            "unit": "iter/sec",
            "range": "stddev: 4.006018687235579e-7",
            "extra": "mean: 1.513417197676358 usec\nrounds: 125864"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 559159.3354544025,
            "unit": "iter/sec",
            "range": "stddev: 2.1080987693384982e-7",
            "extra": "mean: 1.788399006496685 usec\nrounds: 107241"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 888525.0402380687,
            "unit": "iter/sec",
            "range": "stddev: 1.7003142215576885e-7",
            "extra": "mean: 1.125460684520566 usec\nrounds: 23454"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 844174.5312060132,
            "unit": "iter/sec",
            "range": "stddev: 2.1927607023501715e-7",
            "extra": "mean: 1.184589161404064 usec\nrounds: 124796"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 760581.9523360655,
            "unit": "iter/sec",
            "range": "stddev: 2.3029498163590445e-7",
            "extra": "mean: 1.3147827093827056 usec\nrounds: 124420"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 668615.888790624,
            "unit": "iter/sec",
            "range": "stddev: 2.9922366264076867e-7",
            "extra": "mean: 1.4956270360382484 usec\nrounds: 120335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 557723.2268984414,
            "unit": "iter/sec",
            "range": "stddev: 2.6510660225747454e-7",
            "extra": "mean: 1.7930040417378832 usec\nrounds: 119252"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 743104.5841611282,
            "unit": "iter/sec",
            "range": "stddev: 1.198253267664801e-7",
            "extra": "mean: 1.345705599607994 usec\nrounds: 4051"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 742855.8950222189,
            "unit": "iter/sec",
            "range": "stddev: 1.307593246701525e-7",
            "extra": "mean: 1.3461561073969668 usec\nrounds: 56104"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 749099.2496214397,
            "unit": "iter/sec",
            "range": "stddev: 2.311705191836053e-7",
            "extra": "mean: 1.3349365928551578 usec\nrounds: 155852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 789264.5638425997,
            "unit": "iter/sec",
            "range": "stddev: 1.1241434346083899e-7",
            "extra": "mean: 1.2670022775777712 usec\nrounds: 197597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 789018.4641515156,
            "unit": "iter/sec",
            "range": "stddev: 1.1470353489530788e-7",
            "extra": "mean: 1.2673974633475364 usec\nrounds: 186188"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 745092.2673089834,
            "unit": "iter/sec",
            "range": "stddev: 1.9522649663661742e-7",
            "extra": "mean: 1.3421156598653958 usec\nrounds: 18182"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 785313.0681306324,
            "unit": "iter/sec",
            "range": "stddev: 1.4451021835751518e-7",
            "extra": "mean: 1.2733775109338377 usec\nrounds: 192341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 735623.016182347,
            "unit": "iter/sec",
            "range": "stddev: 3.170405920179011e-7",
            "extra": "mean: 1.3593919412550286 usec\nrounds: 197871"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 781288.2767885629,
            "unit": "iter/sec",
            "range": "stddev: 1.130049627052164e-7",
            "extra": "mean: 1.2799372903820316 usec\nrounds: 199636"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 789423.7566290571,
            "unit": "iter/sec",
            "range": "stddev: 1.4168200261114745e-7",
            "extra": "mean: 1.2667467777637336 usec\nrounds: 193120"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 728812.1896327141,
            "unit": "iter/sec",
            "range": "stddev: 1.187479746670502e-7",
            "extra": "mean: 1.3720956018915536 usec\nrounds: 27540"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 723166.7106796046,
            "unit": "iter/sec",
            "range": "stddev: 2.350215443803422e-7",
            "extra": "mean: 1.382807014250197 usec\nrounds: 197434"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 767570.0738152026,
            "unit": "iter/sec",
            "range": "stddev: 1.1093098481584465e-7",
            "extra": "mean: 1.302812647488334 usec\nrounds: 188923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 768923.5905288943,
            "unit": "iter/sec",
            "range": "stddev: 1.285204266192904e-7",
            "extra": "mean: 1.3005193393951702 usec\nrounds: 189791"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 763821.3813680733,
            "unit": "iter/sec",
            "range": "stddev: 1.0886278800353318e-7",
            "extra": "mean: 1.309206608237268 usec\nrounds: 186673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 731031.2869279092,
            "unit": "iter/sec",
            "range": "stddev: 2.510327493232272e-7",
            "extra": "mean: 1.3679305084224325 usec\nrounds: 25600"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 774352.9267156748,
            "unit": "iter/sec",
            "range": "stddev: 1.0688548579625893e-7",
            "extra": "mean: 1.2914008141499254 usec\nrounds: 185737"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 768013.4230355379,
            "unit": "iter/sec",
            "range": "stddev: 1.1098817758178076e-7",
            "extra": "mean: 1.3020605760346555 usec\nrounds: 182718"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 770199.9679801429,
            "unit": "iter/sec",
            "range": "stddev: 1.255939543939858e-7",
            "extra": "mean: 1.2983641152602354 usec\nrounds: 188178"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 768351.4512601412,
            "unit": "iter/sec",
            "range": "stddev: 1.2179098523918874e-7",
            "extra": "mean: 1.3014877480350193 usec\nrounds: 188046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 700723.3226761187,
            "unit": "iter/sec",
            "range": "stddev: 1.7465896832855724e-7",
            "extra": "mean: 1.4270967836219857 usec\nrounds: 24490"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 720461.1302810862,
            "unit": "iter/sec",
            "range": "stddev: 1.7072081190703103e-7",
            "extra": "mean: 1.3879999322237584 usec\nrounds: 132218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 692796.6169062782,
            "unit": "iter/sec",
            "range": "stddev: 2.5622610199157086e-7",
            "extra": "mean: 1.4434250624166667 usec\nrounds: 58092"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 690290.0397111798,
            "unit": "iter/sec",
            "range": "stddev: 2.9291316827713896e-7",
            "extra": "mean: 1.4486664191452105 usec\nrounds: 195404"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 690685.8363216185,
            "unit": "iter/sec",
            "range": "stddev: 2.623752972665765e-7",
            "extra": "mean: 1.4478362627583243 usec\nrounds: 193137"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 72830.81981962989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039508480517050705",
            "extra": "mean: 13.730450961235407 usec\nrounds: 37"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 57889.702791220625,
            "unit": "iter/sec",
            "range": "stddev: 8.968488896726766e-7",
            "extra": "mean: 17.27422929785117 usec\nrounds: 19584"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - SDK": [
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
        "date": 1696432300945,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 473164.17891608085,
            "unit": "iter/sec",
            "range": "stddev: 3.420334125089897e-7",
            "extra": "mean: 2.1134313300951666 usec\nrounds: 28452"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 453282.3878080008,
            "unit": "iter/sec",
            "range": "stddev: 2.5767744658800256e-7",
            "extra": "mean: 2.2061302774983953 usec\nrounds: 68650"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 432124.59509846015,
            "unit": "iter/sec",
            "range": "stddev: 2.3023829673097542e-7",
            "extra": "mean: 2.314147380970409 usec\nrounds: 58483"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 400615.654148503,
            "unit": "iter/sec",
            "range": "stddev: 2.485822629484496e-7",
            "extra": "mean: 2.4961580748148027 usec\nrounds: 72319"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 369842.52326492325,
            "unit": "iter/sec",
            "range": "stddev: 3.3151669464082576e-7",
            "extra": "mean: 2.7038534973537542 usec\nrounds: 68967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 481076.6361963894,
            "unit": "iter/sec",
            "range": "stddev: 2.325547428457751e-7",
            "extra": "mean: 2.0786708909966087 usec\nrounds: 45744"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 454583.0053734496,
            "unit": "iter/sec",
            "range": "stddev: 2.3535874344015472e-7",
            "extra": "mean: 2.1998182690056325 usec\nrounds: 72816"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 431945.1687212822,
            "unit": "iter/sec",
            "range": "stddev: 2.4826756860655236e-7",
            "extra": "mean: 2.315108658259498 usec\nrounds: 80187"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 400264.20004893414,
            "unit": "iter/sec",
            "range": "stddev: 2.735565670784518e-7",
            "extra": "mean: 2.4983498396252912 usec\nrounds: 80301"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 369926.2943968279,
            "unit": "iter/sec",
            "range": "stddev: 2.909801344929774e-7",
            "extra": "mean: 2.7032412000626223 usec\nrounds: 78894"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 463938.84036235104,
            "unit": "iter/sec",
            "range": "stddev: 0.000015243657152237821",
            "extra": "mean: 2.1554565235774787 usec\nrounds: 31368"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 460528.51653235697,
            "unit": "iter/sec",
            "range": "stddev: 2.3538287213394508e-7",
            "extra": "mean: 2.1714181947508986 usec\nrounds: 54534"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 438273.12178467005,
            "unit": "iter/sec",
            "range": "stddev: 2.5187117940547936e-7",
            "extra": "mean: 2.281682244003351 usec\nrounds: 68786"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 397924.4803896027,
            "unit": "iter/sec",
            "range": "stddev: 3.9677584159462654e-7",
            "extra": "mean: 2.5130396577283025 usec\nrounds: 72219"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 374826.46347382874,
            "unit": "iter/sec",
            "range": "stddev: 2.769543306751154e-7",
            "extra": "mean: 2.667901275518724 usec\nrounds: 59166"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 379825.1829934218,
            "unit": "iter/sec",
            "range": "stddev: 2.630992907851413e-7",
            "extra": "mean: 2.6327901486651006 usec\nrounds: 3003"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 382324.2632203046,
            "unit": "iter/sec",
            "range": "stddev: 2.872075623662309e-7",
            "extra": "mean: 2.6155807941066387 usec\nrounds: 135446"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 379975.4820618587,
            "unit": "iter/sec",
            "range": "stddev: 2.7678881447890615e-7",
            "extra": "mean: 2.63174875013963 usec\nrounds: 145830"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 381175.6787631116,
            "unit": "iter/sec",
            "range": "stddev: 3.6018292349986114e-7",
            "extra": "mean: 2.6234622398914067 usec\nrounds: 140644"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 381331.3871931242,
            "unit": "iter/sec",
            "range": "stddev: 2.9597947628317776e-7",
            "extra": "mean: 2.622391005788235 usec\nrounds: 125372"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 374283.85109242477,
            "unit": "iter/sec",
            "range": "stddev: 3.2622301547463883e-7",
            "extra": "mean: 2.671769025249936 usec\nrounds: 18501"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 378247.29422130773,
            "unit": "iter/sec",
            "range": "stddev: 3.1195168661143255e-7",
            "extra": "mean: 2.643773042867856 usec\nrounds: 129993"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 380623.1351487911,
            "unit": "iter/sec",
            "range": "stddev: 2.5244609641330834e-7",
            "extra": "mean: 2.6272706718394447 usec\nrounds: 148318"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 380939.01572734147,
            "unit": "iter/sec",
            "range": "stddev: 3.0885466410649554e-7",
            "extra": "mean: 2.6250920979849273 usec\nrounds: 141143"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 379962.1517136205,
            "unit": "iter/sec",
            "range": "stddev: 2.7045760928478133e-7",
            "extra": "mean: 2.631841080723496 usec\nrounds: 124097"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 376738.6900808393,
            "unit": "iter/sec",
            "range": "stddev: 2.8197459341647314e-7",
            "extra": "mean: 2.6543597096051466 usec\nrounds: 23213"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 374984.64853972633,
            "unit": "iter/sec",
            "range": "stddev: 3.306551294264375e-7",
            "extra": "mean: 2.6667758370755243 usec\nrounds: 49980"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 375035.9537666913,
            "unit": "iter/sec",
            "range": "stddev: 2.8948991573921724e-7",
            "extra": "mean: 2.6664110199474287 usec\nrounds: 123582"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 374279.9009576972,
            "unit": "iter/sec",
            "range": "stddev: 2.9998906908039167e-7",
            "extra": "mean: 2.671797222990674 usec\nrounds: 122246"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 376573.74794068333,
            "unit": "iter/sec",
            "range": "stddev: 3.392565196362769e-7",
            "extra": "mean: 2.65552233916613 usec\nrounds: 148852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 337309.92664729443,
            "unit": "iter/sec",
            "range": "stddev: 4.843390681254513e-7",
            "extra": "mean: 2.964632585644722 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 376050.3495144257,
            "unit": "iter/sec",
            "range": "stddev: 2.6583298248350357e-7",
            "extra": "mean: 2.659218376718033 usec\nrounds: 124687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 375718.85253418627,
            "unit": "iter/sec",
            "range": "stddev: 3.374006098810115e-7",
            "extra": "mean: 2.661564606766734 usec\nrounds: 124442"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 375397.3861470488,
            "unit": "iter/sec",
            "range": "stddev: 3.098268115765104e-7",
            "extra": "mean: 2.6638438010015473 usec\nrounds: 121657"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 374682.6858871274,
            "unit": "iter/sec",
            "range": "stddev: 3.534627586239614e-7",
            "extra": "mean: 2.6689250335449137 usec\nrounds: 123504"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 366489.8606890917,
            "unit": "iter/sec",
            "range": "stddev: 3.1021782415001465e-7",
            "extra": "mean: 2.728588447494161 usec\nrounds: 20283"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 367317.95838943013,
            "unit": "iter/sec",
            "range": "stddev: 2.993784688787376e-7",
            "extra": "mean: 2.7224369981382748 usec\nrounds: 142049"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 366294.8655584051,
            "unit": "iter/sec",
            "range": "stddev: 2.632977744651163e-7",
            "extra": "mean: 2.730040997095417 usec\nrounds: 121747"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 364397.3105735234,
            "unit": "iter/sec",
            "range": "stddev: 2.8716248234977933e-7",
            "extra": "mean: 2.7442573558682533 usec\nrounds: 116579"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 364234.3787281104,
            "unit": "iter/sec",
            "range": "stddev: 2.739362829692719e-7",
            "extra": "mean: 2.745484936078669 usec\nrounds: 126748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 47616.01713017671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017192073708304748",
            "extra": "mean: 21.001336530649233 usec\nrounds: 112"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 35153.793698292495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012773422997180597",
            "extra": "mean: 28.446431943661675 usec\nrounds: 12710"
          }
        ]
      },
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
        "date": 1696432404775,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 485134.7028321896,
            "unit": "iter/sec",
            "range": "stddev: 1.5358062860889406e-7",
            "extra": "mean: 2.061283173852654 usec\nrounds: 27611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 461733.7105870813,
            "unit": "iter/sec",
            "range": "stddev: 2.658553698727704e-7",
            "extra": "mean: 2.165750468443225 usec\nrounds: 72146"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 439194.3481135259,
            "unit": "iter/sec",
            "range": "stddev: 3.026661146396388e-7",
            "extra": "mean: 2.276896331419805 usec\nrounds: 69828"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 406203.11130744446,
            "unit": "iter/sec",
            "range": "stddev: 2.8300435924517857e-7",
            "extra": "mean: 2.46182260096754 usec\nrounds: 74151"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 371414.9128840534,
            "unit": "iter/sec",
            "range": "stddev: 4.329764144080618e-7",
            "extra": "mean: 2.6924067001913174 usec\nrounds: 80775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 480666.1411641603,
            "unit": "iter/sec",
            "range": "stddev: 2.2789397747805532e-7",
            "extra": "mean: 2.0804461025235255 usec\nrounds: 45081"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 460804.74243554723,
            "unit": "iter/sec",
            "range": "stddev: 2.988192898406082e-7",
            "extra": "mean: 2.170116554605273 usec\nrounds: 61170"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 441418.9350412494,
            "unit": "iter/sec",
            "range": "stddev: 2.5877797623285826e-7",
            "extra": "mean: 2.2654216224470587 usec\nrounds: 78531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 406645.7119043655,
            "unit": "iter/sec",
            "range": "stddev: 4.0430257580406764e-7",
            "extra": "mean: 2.459143108424512 usec\nrounds: 79443"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 371815.9979487239,
            "unit": "iter/sec",
            "range": "stddev: 2.735110299458422e-7",
            "extra": "mean: 2.6895023493257737 usec\nrounds: 78310"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 470013.9952691542,
            "unit": "iter/sec",
            "range": "stddev: 0.000015984694530072598",
            "extra": "mean: 2.127596220677107 usec\nrounds: 30904"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 465362.33065662545,
            "unit": "iter/sec",
            "range": "stddev: 3.0886983955786774e-7",
            "extra": "mean: 2.148863227904591 usec\nrounds: 49289"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 443514.7752847607,
            "unit": "iter/sec",
            "range": "stddev: 2.761036338434044e-7",
            "extra": "mean: 2.254716315500302 usec\nrounds: 73850"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 406349.02050597157,
            "unit": "iter/sec",
            "range": "stddev: 3.8786592355961955e-7",
            "extra": "mean: 2.4609386255067998 usec\nrounds: 73850"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 374456.8688622808,
            "unit": "iter/sec",
            "range": "stddev: 3.4616268756612154e-7",
            "extra": "mean: 2.670534534560198 usec\nrounds: 68461"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 383642.51653768204,
            "unit": "iter/sec",
            "range": "stddev: 1.1368566408161985e-7",
            "extra": "mean: 2.6065932655870747 usec\nrounds: 2912"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 383499.76985774946,
            "unit": "iter/sec",
            "range": "stddev: 2.5618914353308774e-7",
            "extra": "mean: 2.607563494421202 usec\nrounds: 130025"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 383112.9706267037,
            "unit": "iter/sec",
            "range": "stddev: 3.167223655786598e-7",
            "extra": "mean: 2.6101961475336646 usec\nrounds: 141767"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 382638.0984204328,
            "unit": "iter/sec",
            "range": "stddev: 3.427038135389754e-7",
            "extra": "mean: 2.613435525965911 usec\nrounds: 123087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 381822.582962238,
            "unit": "iter/sec",
            "range": "stddev: 3.9762502927366953e-7",
            "extra": "mean: 2.6190174301421543 usec\nrounds: 126531"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 383262.85857614834,
            "unit": "iter/sec",
            "range": "stddev: 3.839900981233962e-7",
            "extra": "mean: 2.60917534173564 usec\nrounds: 18825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 381619.2878229388,
            "unit": "iter/sec",
            "range": "stddev: 3.520657504348072e-7",
            "extra": "mean: 2.6204126256426887 usec\nrounds: 143703"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 383828.23040807684,
            "unit": "iter/sec",
            "range": "stddev: 3.4495415628498277e-7",
            "extra": "mean: 2.605332075071248 usec\nrounds: 141403"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 383136.453299132,
            "unit": "iter/sec",
            "range": "stddev: 2.9848287015544197e-7",
            "extra": "mean: 2.6100361669821446 usec\nrounds: 148359"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 369210.52852639183,
            "unit": "iter/sec",
            "range": "stddev: 7.157122850572181e-7",
            "extra": "mean: 2.70848180844474 usec\nrounds: 144117"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 378188.2874138449,
            "unit": "iter/sec",
            "range": "stddev: 3.198648278558508e-7",
            "extra": "mean: 2.644185537416491 usec\nrounds: 22268"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 377296.12642038986,
            "unit": "iter/sec",
            "range": "stddev: 3.433951373048901e-7",
            "extra": "mean: 2.650438024602942 usec\nrounds: 139339"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 374767.6197515937,
            "unit": "iter/sec",
            "range": "stddev: 3.2089717254829256e-7",
            "extra": "mean: 2.6683201730790604 usec\nrounds: 124118"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 375604.4678233834,
            "unit": "iter/sec",
            "range": "stddev: 3.744297291670145e-7",
            "extra": "mean: 2.6623751463739764 usec\nrounds: 125753"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 377092.53580029524,
            "unit": "iter/sec",
            "range": "stddev: 2.7806149598711405e-7",
            "extra": "mean: 2.6518689845656107 usec\nrounds: 122939"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 346067.1926022159,
            "unit": "iter/sec",
            "range": "stddev: 3.476484360452896e-7",
            "extra": "mean: 2.8896122526975327 usec\nrounds: 81"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 377830.1442285115,
            "unit": "iter/sec",
            "range": "stddev: 3.9992454310724296e-7",
            "extra": "mean: 2.646691946832068 usec\nrounds: 134884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 374955.7532750608,
            "unit": "iter/sec",
            "range": "stddev: 3.820983626822385e-7",
            "extra": "mean: 2.6669813471735635 usec\nrounds: 129002"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 372239.24920807424,
            "unit": "iter/sec",
            "range": "stddev: 3.8214057145084865e-7",
            "extra": "mean: 2.6864442750931405 usec\nrounds: 130570"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 378308.4564305071,
            "unit": "iter/sec",
            "range": "stddev: 2.808913595595361e-7",
            "extra": "mean: 2.643345616525212 usec\nrounds: 134884"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 370782.946209876,
            "unit": "iter/sec",
            "range": "stddev: 3.401251248101113e-7",
            "extra": "mean: 2.6969956688190435 usec\nrounds: 19402"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 372087.9919170188,
            "unit": "iter/sec",
            "range": "stddev: 3.2699763386368677e-7",
            "extra": "mean: 2.687536340121976 usec\nrounds: 125997"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 372207.0385406658,
            "unit": "iter/sec",
            "range": "stddev: 3.4510613669237607e-7",
            "extra": "mean: 2.686676759044534 usec\nrounds: 120483"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 365886.6700485061,
            "unit": "iter/sec",
            "range": "stddev: 3.039738956590496e-7",
            "extra": "mean: 2.7330867229118474 usec\nrounds: 122623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 367715.1909718705,
            "unit": "iter/sec",
            "range": "stddev: 3.781863743702724e-7",
            "extra": "mean: 2.7194960245101707 usec\nrounds: 92254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 45204.58448111784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036373410449815038",
            "extra": "mean: 22.121650082143873 usec\nrounds: 110"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 34303.41974947192,
            "unit": "iter/sec",
            "range": "stddev: 0.000001121381567703051",
            "extra": "mean: 29.151612501123722 usec\nrounds: 17403"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - SDK": [
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
        "date": 1696432455783,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 581814.4460036893,
            "unit": "iter/sec",
            "range": "stddev: 2.1900816870003805e-7",
            "extra": "mean: 1.7187610360462913 usec\nrounds: 27006"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 540816.890129945,
            "unit": "iter/sec",
            "range": "stddev: 2.5814476074843415e-7",
            "extra": "mean: 1.8490546768236555 usec\nrounds: 66459"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 513544.08694153524,
            "unit": "iter/sec",
            "range": "stddev: 2.7613077459649895e-7",
            "extra": "mean: 1.9472524860632765 usec\nrounds: 81738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 467212.7782682373,
            "unit": "iter/sec",
            "range": "stddev: 3.6317077649024086e-7",
            "extra": "mean: 2.1403524186701026 usec\nrounds: 86558"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 429667.3170837698,
            "unit": "iter/sec",
            "range": "stddev: 3.651321875705242e-7",
            "extra": "mean: 2.3273820470851305 usec\nrounds: 87247"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 582360.5362395326,
            "unit": "iter/sec",
            "range": "stddev: 1.3962689583252396e-7",
            "extra": "mean: 1.717149322063071 usec\nrounds: 52046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 544450.5021750028,
            "unit": "iter/sec",
            "range": "stddev: 2.694163275556105e-7",
            "extra": "mean: 1.8367142577794333 usec\nrounds: 86775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 516110.6605306357,
            "unit": "iter/sec",
            "range": "stddev: 2.5327829035907457e-7",
            "extra": "mean: 1.937568968197357 usec\nrounds: 78574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 471657.5925332276,
            "unit": "iter/sec",
            "range": "stddev: 2.6804557355571736e-7",
            "extra": "mean: 2.120182131764478 usec\nrounds: 80271"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 432251.25772099785,
            "unit": "iter/sec",
            "range": "stddev: 2.739293016791244e-7",
            "extra": "mean: 2.3134692661680187 usec\nrounds: 83278"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 553113.9740038423,
            "unit": "iter/sec",
            "range": "stddev: 2.3397675503875948e-7",
            "extra": "mean: 1.8079456441161135 usec\nrounds: 34414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 535805.2031726694,
            "unit": "iter/sec",
            "range": "stddev: 2.396004844010632e-7",
            "extra": "mean: 1.8663499235891863 usec\nrounds: 57107"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 505985.22774243914,
            "unit": "iter/sec",
            "range": "stddev: 2.739651582177106e-7",
            "extra": "mean: 1.9763422826822692 usec\nrounds: 77955"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 455859.9284145931,
            "unit": "iter/sec",
            "range": "stddev: 3.5908530962750747e-7",
            "extra": "mean: 2.193656291479354 usec\nrounds: 83681"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 425920.1327426654,
            "unit": "iter/sec",
            "range": "stddev: 2.928282702151638e-7",
            "extra": "mean: 2.347858021081584 usec\nrounds: 73052"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 478445.62104683847,
            "unit": "iter/sec",
            "range": "stddev: 3.2731954976023383e-7",
            "extra": "mean: 2.0901016876526137 usec\nrounds: 3088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 485928.5939233811,
            "unit": "iter/sec",
            "range": "stddev: 2.7049762783051857e-7",
            "extra": "mean: 2.0579155301934655 usec\nrounds: 148966"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 487067.4603195147,
            "unit": "iter/sec",
            "range": "stddev: 2.8933247595353923e-7",
            "extra": "mean: 2.0531036898749164 usec\nrounds: 169200"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 480808.06852103595,
            "unit": "iter/sec",
            "range": "stddev: 2.7413255590143796e-7",
            "extra": "mean: 2.079831985923191 usec\nrounds: 148677"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 484689.844142322,
            "unit": "iter/sec",
            "range": "stddev: 2.704650853265179e-7",
            "extra": "mean: 2.063175063569858 usec\nrounds: 158078"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 480067.6730055612,
            "unit": "iter/sec",
            "range": "stddev: 1.9144607467226068e-7",
            "extra": "mean: 2.0830396550954924 usec\nrounds: 19789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 482180.2713952932,
            "unit": "iter/sec",
            "range": "stddev: 2.99476635214122e-7",
            "extra": "mean: 2.073913138557667 usec\nrounds: 167983"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 485038.2875145095,
            "unit": "iter/sec",
            "range": "stddev: 2.6381625737657477e-7",
            "extra": "mean: 2.0616929132013846 usec\nrounds: 141506"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 482322.1745046864,
            "unit": "iter/sec",
            "range": "stddev: 3.037658431944155e-7",
            "extra": "mean: 2.0733029764325788 usec\nrounds: 155627"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 482489.53964314086,
            "unit": "iter/sec",
            "range": "stddev: 2.66264919789157e-7",
            "extra": "mean: 2.072583792675838 usec\nrounds: 174792"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 477911.7908214451,
            "unit": "iter/sec",
            "range": "stddev: 1.9321992391140503e-7",
            "extra": "mean: 2.092436343286652 usec\nrounds: 27164"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 471861.36467217945,
            "unit": "iter/sec",
            "range": "stddev: 3.0822176976552117e-7",
            "extra": "mean: 2.1192665364640293 usec\nrounds: 158756"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 477340.80487461353,
            "unit": "iter/sec",
            "range": "stddev: 2.7020814238670465e-7",
            "extra": "mean: 2.0949392756453684 usec\nrounds: 175162"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 473938.0574910852,
            "unit": "iter/sec",
            "range": "stddev: 3.087143660300156e-7",
            "extra": "mean: 2.109980374426483 usec\nrounds: 164319"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 478775.46379932837,
            "unit": "iter/sec",
            "range": "stddev: 2.9197948440287966e-7",
            "extra": "mean: 2.088661754018237 usec\nrounds: 153228"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 477725.5474150645,
            "unit": "iter/sec",
            "range": "stddev: 1.6448311782957897e-7",
            "extra": "mean: 2.093252088800613 usec\nrounds: 27298"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 473827.09802263154,
            "unit": "iter/sec",
            "range": "stddev: 2.604399016238566e-7",
            "extra": "mean: 2.110474483568343 usec\nrounds: 126316"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 476472.7592665449,
            "unit": "iter/sec",
            "range": "stddev: 3.01634640418671e-7",
            "extra": "mean: 2.098755869148413 usec\nrounds: 162787"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 475263.9445767087,
            "unit": "iter/sec",
            "range": "stddev: 3.2972625909479756e-7",
            "extra": "mean: 2.1040939701214754 usec\nrounds: 165727"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 476289.2048313411,
            "unit": "iter/sec",
            "range": "stddev: 3.139836381769832e-7",
            "extra": "mean: 2.0995646969452317 usec\nrounds: 169294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 466707.7872085655,
            "unit": "iter/sec",
            "range": "stddev: 3.4767302998351295e-7",
            "extra": "mean: 2.1426683406786897 usec\nrounds: 23098"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 464529.0386458853,
            "unit": "iter/sec",
            "range": "stddev: 2.8023467026714346e-7",
            "extra": "mean: 2.152717950453705 usec\nrounds: 148605"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 465964.8228502019,
            "unit": "iter/sec",
            "range": "stddev: 2.6914905994677047e-7",
            "extra": "mean: 2.1460847492375605 usec\nrounds: 165753"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 457163.84694579535,
            "unit": "iter/sec",
            "range": "stddev: 2.860390406949604e-7",
            "extra": "mean: 2.187399565124771 usec\nrounds: 153447"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 457548.796511768,
            "unit": "iter/sec",
            "range": "stddev: 3.0998807803706537e-7",
            "extra": "mean: 2.1855592400717425 usec\nrounds: 153162"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 57531.97604084564,
            "unit": "iter/sec",
            "range": "stddev: 0.000002365283333500382",
            "extra": "mean: 17.381638330830768 usec\nrounds: 88"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41669.90454179201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010637750966822393",
            "extra": "mean: 23.998135128845078 usec\nrounds: 14143"
          }
        ]
      },
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696432509474,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 603692.1205362234,
            "unit": "iter/sec",
            "range": "stddev: 1.8067347897950078e-7",
            "extra": "mean: 1.6564735002864706 usec\nrounds: 28596"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 571341.0874768139,
            "unit": "iter/sec",
            "range": "stddev: 2.2428627059260233e-7",
            "extra": "mean: 1.7502679606262028 usec\nrounds: 83230"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 535303.1814206674,
            "unit": "iter/sec",
            "range": "stddev: 2.3373239898328553e-7",
            "extra": "mean: 1.8681002368527884 usec\nrounds: 90596"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 477091.5295520666,
            "unit": "iter/sec",
            "range": "stddev: 3.6242863869775634e-7",
            "extra": "mean: 2.0960338594543555 usec\nrounds: 84424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 439840.9931824171,
            "unit": "iter/sec",
            "range": "stddev: 2.567038361230032e-7",
            "extra": "mean: 2.273548885847631 usec\nrounds: 84216"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 603395.2714673685,
            "unit": "iter/sec",
            "range": "stddev: 2.3762660531308218e-7",
            "extra": "mean: 1.6572884264872465 usec\nrounds: 58795"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 572230.1603026337,
            "unit": "iter/sec",
            "range": "stddev: 2.2637232078190345e-7",
            "extra": "mean: 1.7475485728874076 usec\nrounds: 91057"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 537880.3835887687,
            "unit": "iter/sec",
            "range": "stddev: 2.7089705344147577e-7",
            "extra": "mean: 1.8591494140908111 usec\nrounds: 87574"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 482483.64934582904,
            "unit": "iter/sec",
            "range": "stddev: 4.228829607761318e-7",
            "extra": "mean: 2.072609095366943 usec\nrounds: 85151"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 443117.44672043016,
            "unit": "iter/sec",
            "range": "stddev: 2.6794235424019786e-7",
            "extra": "mean: 2.2567380440583644 usec\nrounds: 78845"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 609001.5967069262,
            "unit": "iter/sec",
            "range": "stddev: 2.157364472469434e-7",
            "extra": "mean: 1.6420318196328745 usec\nrounds: 35897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 571882.3323287972,
            "unit": "iter/sec",
            "range": "stddev: 3.289814138629474e-7",
            "extra": "mean: 1.7486114598572027 usec\nrounds: 57258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 544826.3455044576,
            "unit": "iter/sec",
            "range": "stddev: 2.651914988222926e-7",
            "extra": "mean: 1.8354472177260348 usec\nrounds: 81314"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 479165.1785829491,
            "unit": "iter/sec",
            "range": "stddev: 3.705494533988168e-7",
            "extra": "mean: 2.0869630029405157 usec\nrounds: 86446"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 435364.3860619493,
            "unit": "iter/sec",
            "range": "stddev: 2.370672516500701e-7",
            "extra": "mean: 2.2969265103317547 usec\nrounds: 79115"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 478058.52690127137,
            "unit": "iter/sec",
            "range": "stddev: 1.1190637516763196e-7",
            "extra": "mean: 2.091794087393237 usec\nrounds: 3077"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 485531.02165870724,
            "unit": "iter/sec",
            "range": "stddev: 2.2744031974767415e-7",
            "extra": "mean: 2.059600633928035 usec\nrounds: 149526"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 485677.71547659,
            "unit": "iter/sec",
            "range": "stddev: 2.8749561677973256e-7",
            "extra": "mean: 2.0589785533369827 usec\nrounds: 165103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 484571.4742509979,
            "unit": "iter/sec",
            "range": "stddev: 2.784360326481411e-7",
            "extra": "mean: 2.0636790507441654 usec\nrounds: 173282"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 488447.981630309,
            "unit": "iter/sec",
            "range": "stddev: 2.9508056439553596e-7",
            "extra": "mean: 2.047300915569897 usec\nrounds: 174806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 485537.66448595695,
            "unit": "iter/sec",
            "range": "stddev: 1.7272558141185947e-7",
            "extra": "mean: 2.0595724557408106 usec\nrounds: 19405"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 490713.8038342443,
            "unit": "iter/sec",
            "range": "stddev: 2.8597863055097114e-7",
            "extra": "mean: 2.0378477071286643 usec\nrounds: 156511"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 490376.0274732301,
            "unit": "iter/sec",
            "range": "stddev: 2.6165093145901484e-7",
            "extra": "mean: 2.0392513988759178 usec\nrounds: 166330"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 489387.7225427243,
            "unit": "iter/sec",
            "range": "stddev: 3.0614961823775263e-7",
            "extra": "mean: 2.0433696105089734 usec\nrounds: 153678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 491000.5061682729,
            "unit": "iter/sec",
            "range": "stddev: 3.0060115342065565e-7",
            "extra": "mean: 2.036657778224949 usec\nrounds: 166485"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 481312.88634778635,
            "unit": "iter/sec",
            "range": "stddev: 1.6523010202070607e-7",
            "extra": "mean: 2.077650585231623 usec\nrounds: 27597"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 478032.3467905276,
            "unit": "iter/sec",
            "range": "stddev: 2.737470580172273e-7",
            "extra": "mean: 2.0919086474250608 usec\nrounds: 162258"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 479663.97340548993,
            "unit": "iter/sec",
            "range": "stddev: 2.512758612783583e-7",
            "extra": "mean: 2.0847928038044197 usec\nrounds: 171566"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 479693.5987334563,
            "unit": "iter/sec",
            "range": "stddev: 3.138945087518714e-7",
            "extra": "mean: 2.08466404938552 usec\nrounds: 164546"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 479320.39748131955,
            "unit": "iter/sec",
            "range": "stddev: 2.5822470874943656e-7",
            "extra": "mean: 2.08628717921184 usec\nrounds: 130238"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 484135.24872539827,
            "unit": "iter/sec",
            "range": "stddev: 1.6630201900090372e-7",
            "extra": "mean: 2.065538509399468 usec\nrounds: 26609"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 477108.2860045609,
            "unit": "iter/sec",
            "range": "stddev: 2.8062437748094756e-7",
            "extra": "mean: 2.0959602449462396 usec\nrounds: 144525"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 475691.07208724093,
            "unit": "iter/sec",
            "range": "stddev: 2.7161909995955366e-7",
            "extra": "mean: 2.10220468425483 usec\nrounds: 163693"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 476248.89778087207,
            "unit": "iter/sec",
            "range": "stddev: 2.963052142868059e-7",
            "extra": "mean: 2.0997423923910317 usec\nrounds: 149225"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 478635.79702275665,
            "unit": "iter/sec",
            "range": "stddev: 2.6027320950412853e-7",
            "extra": "mean: 2.089271229231639 usec\nrounds: 161296"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 466429.91842412914,
            "unit": "iter/sec",
            "range": "stddev: 2.7313000943372787e-7",
            "extra": "mean: 2.1439448039237705 usec\nrounds: 25553"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 458810.4295379768,
            "unit": "iter/sec",
            "range": "stddev: 2.939003061468525e-7",
            "extra": "mean: 2.1795494078175217 usec\nrounds: 147260"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 463340.13424522587,
            "unit": "iter/sec",
            "range": "stddev: 2.515943271804285e-7",
            "extra": "mean: 2.15824170213311 usec\nrounds: 143233"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 462075.6935026961,
            "unit": "iter/sec",
            "range": "stddev: 3.4333752490725283e-7",
            "extra": "mean: 2.1641475932647496 usec\nrounds: 159998"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 461641.00105366163,
            "unit": "iter/sec",
            "range": "stddev: 2.977908587752077e-7",
            "extra": "mean: 2.1661854075300364 usec\nrounds: 125753"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 55063.03873143068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026129069814189355",
            "extra": "mean: 18.161002789502557 usec\nrounds: 92"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41724.20890925423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012014941631691071",
            "extra": "mean: 23.96690137792414 usec\nrounds: 14478"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - SDK": [
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696432559181,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 617688.2056929647,
            "unit": "iter/sec",
            "range": "stddev: 1.875516146271527e-7",
            "extra": "mean: 1.6189397673185808 usec\nrounds: 27915"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 572284.1944353047,
            "unit": "iter/sec",
            "range": "stddev: 2.8446570320565016e-7",
            "extra": "mean: 1.7473835722245294 usec\nrounds: 80821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 536317.9424365391,
            "unit": "iter/sec",
            "range": "stddev: 2.5073913007987897e-7",
            "extra": "mean: 1.8645656258616166 usec\nrounds: 99958"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 491791.4944311434,
            "unit": "iter/sec",
            "range": "stddev: 2.315793704448869e-7",
            "extra": "mean: 2.0333820558582514 usec\nrounds: 96891"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 443354.2471814355,
            "unit": "iter/sec",
            "range": "stddev: 2.196551635435571e-7",
            "extra": "mean: 2.255532695034195 usec\nrounds: 91930"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 613090.894876528,
            "unit": "iter/sec",
            "range": "stddev: 2.4458121484765556e-7",
            "extra": "mean: 1.6310795158707956 usec\nrounds: 58738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 571989.8591181268,
            "unit": "iter/sec",
            "range": "stddev: 2.727755771864837e-7",
            "extra": "mean: 1.7482827432321333 usec\nrounds: 94779"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 538254.1016683058,
            "unit": "iter/sec",
            "range": "stddev: 2.1424628322614985e-7",
            "extra": "mean: 1.8578585781334944 usec\nrounds: 93757"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 489800.91226734116,
            "unit": "iter/sec",
            "range": "stddev: 2.2384397580544873e-7",
            "extra": "mean: 2.0416458502922996 usec\nrounds: 97542"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 442732.45287248254,
            "unit": "iter/sec",
            "range": "stddev: 2.244843390306261e-7",
            "extra": "mean: 2.25870047138384 usec\nrounds: 94724"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 606342.9740561113,
            "unit": "iter/sec",
            "range": "stddev: 2.889941784784505e-7",
            "extra": "mean: 1.6492316111301382 usec\nrounds: 288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 573899.1718411071,
            "unit": "iter/sec",
            "range": "stddev: 2.4674306224767856e-7",
            "extra": "mean: 1.7424663583185402 usec\nrounds: 76889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 539198.6850756303,
            "unit": "iter/sec",
            "range": "stddev: 2.2072771211649136e-7",
            "extra": "mean: 1.8546039292728165 usec\nrounds: 41548"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 494128.6782419773,
            "unit": "iter/sec",
            "range": "stddev: 2.859747368956238e-7",
            "extra": "mean: 2.0237643432431884 usec\nrounds: 89872"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 446747.65349899814,
            "unit": "iter/sec",
            "range": "stddev: 2.2163050004882993e-7",
            "extra": "mean: 2.238400117309721 usec\nrounds: 80663"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 506224.1650193144,
            "unit": "iter/sec",
            "range": "stddev: 1.0297133607246256e-7",
            "extra": "mean: 1.9754094511901583 usec\nrounds: 2928"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 509397.39928791585,
            "unit": "iter/sec",
            "range": "stddev: 2.3827662827264255e-7",
            "extra": "mean: 1.9631038583979723 usec\nrounds: 146546"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 509019.6488467584,
            "unit": "iter/sec",
            "range": "stddev: 2.5529413801578783e-7",
            "extra": "mean: 1.9645607046125098 usec\nrounds: 155009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 507534.6288508671,
            "unit": "iter/sec",
            "range": "stddev: 2.447187996565003e-7",
            "extra": "mean: 1.9703089073235198 usec\nrounds: 154351"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 507604.8256900923,
            "unit": "iter/sec",
            "range": "stddev: 2.9844899182220887e-7",
            "extra": "mean: 1.9700364326530841 usec\nrounds: 52737"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 509425.9033798723,
            "unit": "iter/sec",
            "range": "stddev: 3.662893351006953e-7",
            "extra": "mean: 1.9629940161372457 usec\nrounds: 16740"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 505530.68014502106,
            "unit": "iter/sec",
            "range": "stddev: 2.753678467188885e-7",
            "extra": "mean: 1.9781193096196081 usec\nrounds: 138200"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 509995.3207802375,
            "unit": "iter/sec",
            "range": "stddev: 2.662533555998754e-7",
            "extra": "mean: 1.9608023039703748 usec\nrounds: 144088"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 509996.6986344105,
            "unit": "iter/sec",
            "range": "stddev: 2.6145797731835673e-7",
            "extra": "mean: 1.960797006485814 usec\nrounds: 144001"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 506459.2296452082,
            "unit": "iter/sec",
            "range": "stddev: 2.4961961486352405e-7",
            "extra": "mean: 1.974492597756652 usec\nrounds: 142454"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 500474.12757038296,
            "unit": "iter/sec",
            "range": "stddev: 2.5344848830882763e-7",
            "extra": "mean: 1.998105286390389 usec\nrounds: 22477"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 497566.7138495921,
            "unit": "iter/sec",
            "range": "stddev: 2.5251956405350537e-7",
            "extra": "mean: 2.0097807432960377 usec\nrounds: 143953"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 492029.9873282429,
            "unit": "iter/sec",
            "range": "stddev: 2.868275267135193e-7",
            "extra": "mean: 2.032396450935988 usec\nrounds: 147098"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 498266.92647158593,
            "unit": "iter/sec",
            "range": "stddev: 2.333487416767962e-7",
            "extra": "mean: 2.006956406039978 usec\nrounds: 114046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 412655.23771092296,
            "unit": "iter/sec",
            "range": "stddev: 0.000001730393649962941",
            "extra": "mean: 2.423330442979932 usec\nrounds: 96"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 496843.07901143015,
            "unit": "iter/sec",
            "range": "stddev: 2.8122919430987946e-7",
            "extra": "mean: 2.012707919751448 usec\nrounds: 27022"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 498820.05274304905,
            "unit": "iter/sec",
            "range": "stddev: 2.5625822005892135e-7",
            "extra": "mean: 2.0047309535792013 usec\nrounds: 131667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 495232.86544676125,
            "unit": "iter/sec",
            "range": "stddev: 2.5359872308075365e-7",
            "extra": "mean: 2.0192520928470215 usec\nrounds: 147817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 498587.6143788892,
            "unit": "iter/sec",
            "range": "stddev: 2.7017393901022743e-7",
            "extra": "mean: 2.005665546356864 usec\nrounds: 133476"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 495798.70025887166,
            "unit": "iter/sec",
            "range": "stddev: 2.6417541508513546e-7",
            "extra": "mean: 2.0169476028837297 usec\nrounds: 156568"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 483179.93931819114,
            "unit": "iter/sec",
            "range": "stddev: 3.122971090627753e-7",
            "extra": "mean: 2.0696223469274964 usec\nrounds: 26294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 483111.86226255674,
            "unit": "iter/sec",
            "range": "stddev: 2.6210156614378253e-7",
            "extra": "mean: 2.0699139849655155 usec\nrounds: 136167"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 478110.33618335467,
            "unit": "iter/sec",
            "range": "stddev: 2.768076509856718e-7",
            "extra": "mean: 2.0915674151342785 usec\nrounds: 146687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 475894.9772543212,
            "unit": "iter/sec",
            "range": "stddev: 2.7937057778043013e-7",
            "extra": "mean: 2.101303959477584 usec\nrounds: 138808"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 473701.53020377975,
            "unit": "iter/sec",
            "range": "stddev: 2.500060016287529e-7",
            "extra": "mean: 2.111033923765908 usec\nrounds: 50814"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 59280.58126742087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013407789201147583",
            "extra": "mean: 16.868930408912423 usec\nrounds: 113"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 42135.776029496774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011071723801395473",
            "extra": "mean: 23.732801296930166 usec\nrounds: 17588"
          }
        ]
      },
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696432621088,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 606429.2718015234,
            "unit": "iter/sec",
            "range": "stddev: 1.954346045827008e-7",
            "extra": "mean: 1.6489969176937873 usec\nrounds: 27615"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 563234.5399586237,
            "unit": "iter/sec",
            "range": "stddev: 2.2290862644984122e-7",
            "extra": "mean: 1.7754592963589588 usec\nrounds: 79481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 531430.9042302311,
            "unit": "iter/sec",
            "range": "stddev: 2.562218957345095e-7",
            "extra": "mean: 1.8817121699922281 usec\nrounds: 98785"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 486225.0882290629,
            "unit": "iter/sec",
            "range": "stddev: 2.9354863064627305e-7",
            "extra": "mean: 2.0566606376528545 usec\nrounds: 96179"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 439266.60936542024,
            "unit": "iter/sec",
            "range": "stddev: 3.060764845170824e-7",
            "extra": "mean: 2.2765217721525306 usec\nrounds: 94524"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 606210.5747680411,
            "unit": "iter/sec",
            "range": "stddev: 3.2104445377244987e-7",
            "extra": "mean: 1.6495918111996601 usec\nrounds: 57844"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 571910.1303059619,
            "unit": "iter/sec",
            "range": "stddev: 2.6096561685738445e-7",
            "extra": "mean: 1.7485264677249508 usec\nrounds: 98967"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 532570.0788266205,
            "unit": "iter/sec",
            "range": "stddev: 2.427874443343743e-7",
            "extra": "mean: 1.8776871622289402 usec\nrounds: 93260"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 484274.4971044808,
            "unit": "iter/sec",
            "range": "stddev: 2.331398542588152e-7",
            "extra": "mean: 2.064944584071816 usec\nrounds: 97707"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 436333.90825490037,
            "unit": "iter/sec",
            "range": "stddev: 2.6985983387160965e-7",
            "extra": "mean: 2.2918228014858144 usec\nrounds: 92825"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 607725.6912693868,
            "unit": "iter/sec",
            "range": "stddev: 1.80705227835445e-7",
            "extra": "mean: 1.64547922585147 usec\nrounds: 297"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 574329.2127261385,
            "unit": "iter/sec",
            "range": "stddev: 2.829810133929003e-7",
            "extra": "mean: 1.7411616505685863 usec\nrounds: 87361"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 536221.0327330785,
            "unit": "iter/sec",
            "range": "stddev: 2.4812808423823466e-7",
            "extra": "mean: 1.864902603508622 usec\nrounds: 95364"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 489484.3481647267,
            "unit": "iter/sec",
            "range": "stddev: 2.5778410384477696e-7",
            "extra": "mean: 2.042966243454773 usec\nrounds: 90680"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 444173.9999853792,
            "unit": "iter/sec",
            "range": "stddev: 2.5822916093539106e-7",
            "extra": "mean: 2.251369958693928 usec\nrounds: 74581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 502268.4215776643,
            "unit": "iter/sec",
            "range": "stddev: 3.841289960338918e-7",
            "extra": "mean: 1.9909672936612697 usec\nrounds: 3070"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 504240.9450007403,
            "unit": "iter/sec",
            "range": "stddev: 2.2186744657300872e-7",
            "extra": "mean: 1.9831788947613762 usec\nrounds: 162418"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 503090.18239336315,
            "unit": "iter/sec",
            "range": "stddev: 2.596412260480585e-7",
            "extra": "mean: 1.987715195002764 usec\nrounds: 166253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 507852.00584049884,
            "unit": "iter/sec",
            "range": "stddev: 2.657289979017443e-7",
            "extra": "mean: 1.9690775826414086 usec\nrounds: 152955"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 506640.65431466873,
            "unit": "iter/sec",
            "range": "stddev: 3.2349883273850357e-7",
            "extra": "mean: 1.9737855450086157 usec\nrounds: 162923"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 504842.8674565865,
            "unit": "iter/sec",
            "range": "stddev: 3.272509488792147e-7",
            "extra": "mean: 1.9808143572237238 usec\nrounds: 20907"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 508230.2654303438,
            "unit": "iter/sec",
            "range": "stddev: 3.186838208929351e-7",
            "extra": "mean: 1.9676120609488896 usec\nrounds: 147109"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 508286.4224263331,
            "unit": "iter/sec",
            "range": "stddev: 2.6388954081244784e-7",
            "extra": "mean: 1.9673946733151857 usec\nrounds: 149818"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 507334.0187176271,
            "unit": "iter/sec",
            "range": "stddev: 2.5820813643684623e-7",
            "extra": "mean: 1.971088007320443 usec\nrounds: 169950"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 508091.97220558254,
            "unit": "iter/sec",
            "range": "stddev: 2.497701495059019e-7",
            "extra": "mean: 1.9681476085108924 usec\nrounds: 169467"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 502629.42574799416,
            "unit": "iter/sec",
            "range": "stddev: 2.6148185273063625e-7",
            "extra": "mean: 1.9895373186952545 usec\nrounds: 29798"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 497589.23474285344,
            "unit": "iter/sec",
            "range": "stddev: 2.6507881976814786e-7",
            "extra": "mean: 2.009689780601433 usec\nrounds: 162578"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 499962.65772959235,
            "unit": "iter/sec",
            "range": "stddev: 2.301376094408027e-7",
            "extra": "mean: 2.0001493802380255 usec\nrounds: 164988"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 500366.96896611043,
            "unit": "iter/sec",
            "range": "stddev: 2.9938392298438544e-7",
            "extra": "mean: 1.9985332006752219 usec\nrounds: 149432"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 451497.47703009617,
            "unit": "iter/sec",
            "range": "stddev: 4.6415839842898196e-7",
            "extra": "mean: 2.2148518006742735 usec\nrounds: 81"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 499331.065789596,
            "unit": "iter/sec",
            "range": "stddev: 3.1347229226362875e-7",
            "extra": "mean: 2.0026793214211343 usec\nrounds: 28239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 497707.05823342706,
            "unit": "iter/sec",
            "range": "stddev: 2.3319007999224426e-7",
            "extra": "mean: 2.009214021495743 usec\nrounds: 158405"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 497916.52389873675,
            "unit": "iter/sec",
            "range": "stddev: 3.2300981004128934e-7",
            "extra": "mean: 2.0083687766975453 usec\nrounds: 160692"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 493131.4088146926,
            "unit": "iter/sec",
            "range": "stddev: 3.5298590706698343e-7",
            "extra": "mean: 2.027857042007594 usec\nrounds: 160129"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 496221.6245447146,
            "unit": "iter/sec",
            "range": "stddev: 3.51880388915269e-7",
            "extra": "mean: 2.015228580410022 usec\nrounds: 109137"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 485996.36159227794,
            "unit": "iter/sec",
            "range": "stddev: 3.7242927954706045e-7",
            "extra": "mean: 2.057628573028167 usec\nrounds: 22788"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 488720.8411427089,
            "unit": "iter/sec",
            "range": "stddev: 2.7425450644231494e-7",
            "extra": "mean: 2.046157879540879 usec\nrounds: 143905"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 485644.0251173528,
            "unit": "iter/sec",
            "range": "stddev: 2.974793674409831e-7",
            "extra": "mean: 2.059121389907672 usec\nrounds: 140865"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 480843.6206389224,
            "unit": "iter/sec",
            "range": "stddev: 2.594511127110475e-7",
            "extra": "mean: 2.0796782094587156 usec\nrounds: 144954"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 482189.7553477474,
            "unit": "iter/sec",
            "range": "stddev: 2.3645991688262482e-7",
            "extra": "mean: 2.0738723477831176 usec\nrounds: 137572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 57007.24088556622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027174695935958156",
            "extra": "mean: 17.541631281670956 usec\nrounds: 101"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 42046.8984310619,
            "unit": "iter/sec",
            "range": "stddev: 9.788476501038125e-7",
            "extra": "mean: 23.78296705141171 usec\nrounds: 17705"
          }
        ]
      }
    ]
  }
}