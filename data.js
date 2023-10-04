window.BENCHMARK_DATA = {
  "lastUpdate": 1696433256695,
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
          "id": "8e0db93ce40e2fc64f5fc34fe7127aea25457298",
          "message": "Fix benchmarks data path",
          "timestamp": "2023-10-04T15:14:16Z",
          "url": "https://github.com/SecuringCarter/opentelemetry-python/commit/8e0db93ce40e2fc64f5fc34fe7127aea25457298"
        },
        "date": 1696433255419,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-delta]",
            "value": 609624.0008416838,
            "unit": "iter/sec",
            "range": "stddev: 1.7932045780755307e-7",
            "extra": "mean: 1.6403553643218436 usec\nrounds: 28242"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-delta]",
            "value": 583273.2293985104,
            "unit": "iter/sec",
            "range": "stddev: 2.483356395261072e-7",
            "extra": "mean: 1.7144623644586454 usec\nrounds: 75177"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-delta]",
            "value": 541757.2666911058,
            "unit": "iter/sec",
            "range": "stddev: 2.7825588479185034e-7",
            "extra": "mean: 1.845845107178176 usec\nrounds: 103424"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-delta]",
            "value": 494709.1863975548,
            "unit": "iter/sec",
            "range": "stddev: 2.031531298470811e-7",
            "extra": "mean: 2.021389591088747 usec\nrounds: 90934"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-delta]",
            "value": 423918.9350224791,
            "unit": "iter/sec",
            "range": "stddev: 2.969751746140035e-7",
            "extra": "mean: 2.3589415744002404 usec\nrounds: 97952"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[0-cumulative]",
            "value": 619435.6158017394,
            "unit": "iter/sec",
            "range": "stddev: 2.5970475254547086e-7",
            "extra": "mean: 1.6143727846609106 usec\nrounds: 57640"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[1-cumulative]",
            "value": 584671.3883602361,
            "unit": "iter/sec",
            "range": "stddev: 2.6118413952998697e-7",
            "extra": "mean: 1.7103624701126399 usec\nrounds: 99091"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[3-cumulative]",
            "value": 542181.4324532121,
            "unit": "iter/sec",
            "range": "stddev: 2.0949303145318596e-7",
            "extra": "mean: 1.8444010439001812 usec\nrounds: 97419"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[5-cumulative]",
            "value": 483829.73930240417,
            "unit": "iter/sec",
            "range": "stddev: 3.2272789973990767e-7",
            "extra": "mean: 2.066842772918054 usec\nrounds: 98844"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_counter_add[10-cumulative]",
            "value": 425359.773793083,
            "unit": "iter/sec",
            "range": "stddev: 3.5067038348786945e-7",
            "extra": "mean: 2.3509510339509716 usec\nrounds: 100060"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[0]",
            "value": 605387.2627770752,
            "unit": "iter/sec",
            "range": "stddev: 1.638847469559118e-7",
            "extra": "mean: 1.6518352160445686 usec\nrounds: 294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[1]",
            "value": 592896.5969046861,
            "unit": "iter/sec",
            "range": "stddev: 3.0052266284889516e-7",
            "extra": "mean: 1.6866347441032112 usec\nrounds: 93264"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[3]",
            "value": 544773.3451610652,
            "unit": "iter/sec",
            "range": "stddev: 2.2378850517782485e-7",
            "extra": "mean: 1.8356257861778178 usec\nrounds: 94288"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[5]",
            "value": 495313.60258450574,
            "unit": "iter/sec",
            "range": "stddev: 2.3268364703059092e-7",
            "extra": "mean: 2.0189229505955057 usec\nrounds: 90182"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics.py::test_up_down_counter_add[10]",
            "value": 430144.9962234223,
            "unit": "iter/sec",
            "range": "stddev: 2.8411579764234816e-7",
            "extra": "mean: 2.324797472433199 usec\nrounds: 88480"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[0]",
            "value": 497124.3715299595,
            "unit": "iter/sec",
            "range": "stddev: 5.702321962926494e-7",
            "extra": "mean: 2.0115690504619215 usec\nrounds: 2989"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[1]",
            "value": 511821.22267712984,
            "unit": "iter/sec",
            "range": "stddev: 2.699353496435747e-7",
            "extra": "mean: 1.9538072195783602 usec\nrounds: 159653"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[3]",
            "value": 521335.1117349679,
            "unit": "iter/sec",
            "range": "stddev: 2.938799492782178e-7",
            "extra": "mean: 1.9181520244666963 usec\nrounds: 162738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[5]",
            "value": 519066.7653220078,
            "unit": "iter/sec",
            "range": "stddev: 2.4058781680884074e-7",
            "extra": "mean: 1.9265344398993467 usec\nrounds: 152445"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record[7]",
            "value": 517580.84745802864,
            "unit": "iter/sec",
            "range": "stddev: 2.798815319373957e-7",
            "extra": "mean: 1.9320653090454463 usec\nrounds: 164357"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[0]",
            "value": 514594.6639728175,
            "unit": "iter/sec",
            "range": "stddev: 2.1822232559538485e-7",
            "extra": "mean: 1.943277048929569 usec\nrounds: 21447"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[1]",
            "value": 513194.86805851286,
            "unit": "iter/sec",
            "range": "stddev: 3.0795843301769234e-7",
            "extra": "mean: 1.948577552583755 usec\nrounds: 153821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[3]",
            "value": 511514.9309580872,
            "unit": "iter/sec",
            "range": "stddev: 2.934317928976184e-7",
            "extra": "mean: 1.9549771462720773 usec\nrounds: 161284"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[5]",
            "value": 513034.2441322137,
            "unit": "iter/sec",
            "range": "stddev: 3.2040152186483376e-7",
            "extra": "mean: 1.9491876252655966 usec\nrounds: 158510"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_10[7]",
            "value": 511221.34233972087,
            "unit": "iter/sec",
            "range": "stddev: 3.007861776573064e-7",
            "extra": "mean: 1.9560998674728098 usec\nrounds: 181591"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[0]",
            "value": 508766.8336455761,
            "unit": "iter/sec",
            "range": "stddev: 1.1816466463783615e-7",
            "extra": "mean: 1.9655369294308862 usec\nrounds: 28400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[1]",
            "value": 499551.09335981123,
            "unit": "iter/sec",
            "range": "stddev: 2.5242896865241146e-7",
            "extra": "mean: 2.001797240146827 usec\nrounds: 158697"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[3]",
            "value": 502611.752308138,
            "unit": "iter/sec",
            "range": "stddev: 2.7011413926412584e-7",
            "extra": "mean: 1.9896072772029543 usec\nrounds: 155694"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[5]",
            "value": 489118.3015899382,
            "unit": "iter/sec",
            "range": "stddev: 0.000027302213963031602",
            "extra": "mean: 2.0444951594519756 usec\nrounds: 172185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_49[7]",
            "value": 502730.1723780139,
            "unit": "iter/sec",
            "range": "stddev: 2.404657327447214e-7",
            "extra": "mean: 1.9891386173815684 usec\nrounds: 152575"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[0]",
            "value": 498150.40909139306,
            "unit": "iter/sec",
            "range": "stddev: 3.00975165806362e-7",
            "extra": "mean: 2.007425833141362 usec\nrounds: 28259"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[1]",
            "value": 505322.00087874976,
            "unit": "iter/sec",
            "range": "stddev: 2.711135057778829e-7",
            "extra": "mean: 1.978936199613336 usec\nrounds: 170071"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[3]",
            "value": 501655.5589830926,
            "unit": "iter/sec",
            "range": "stddev: 2.650427426927151e-7",
            "extra": "mean: 1.9933996187087069 usec\nrounds: 169200"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[5]",
            "value": 498802.0587045016,
            "unit": "iter/sec",
            "range": "stddev: 5.959345132689278e-7",
            "extra": "mean: 2.004803273260779 usec\nrounds: 168009"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_50[7]",
            "value": 502963.7177492047,
            "unit": "iter/sec",
            "range": "stddev: 3.7304221915101815e-7",
            "extra": "mean: 1.9882149839258088 usec\nrounds: 110667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[0]",
            "value": 492089.33473304124,
            "unit": "iter/sec",
            "range": "stddev: 2.3525279935885e-7",
            "extra": "mean: 2.032151338013657 usec\nrounds: 20903"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[1]",
            "value": 491495.4044776525,
            "unit": "iter/sec",
            "range": "stddev: 3.331436641689828e-7",
            "extra": "mean: 2.0346070194954757 usec\nrounds: 145711"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[3]",
            "value": 487766.08989820373,
            "unit": "iter/sec",
            "range": "stddev: 2.906707039942577e-7",
            "extra": "mean: 2.0501630201654626 usec\nrounds: 151959"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[5]",
            "value": 480620.6574744595,
            "unit": "iter/sec",
            "range": "stddev: 2.8333619969633035e-7",
            "extra": "mean: 2.080642986206103 usec\nrounds: 158873"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/metrics/test_benchmark_metrics_histogram,.py::test_histogram_record_1000[7]",
            "value": 482293.0940945124,
            "unit": "iter/sec",
            "range": "stddev: 2.3680373835389098e-7",
            "extra": "mean: 2.0734279885915914 usec\nrounds: 138218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 54587.19275069703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034551305193729317",
            "extra": "mean: 18.319315385333326 usec\nrounds: 86"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 41291.63544604051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010622647964967734",
            "extra": "mean: 24.21797996610693 usec\nrounds: 14889"
          }
        ]
      }
    ]
  }
}